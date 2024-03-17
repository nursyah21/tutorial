import { Hono } from 'hono'
import { nanoid } from 'nanoid'

type Bindings = {
	R2BUCKET: R2Bucket;
	R2LINK: string | null;
}
// type ENVIRONMENT = String

const app = new Hono<{Bindings: Bindings}>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/upload', async (c) => {
  const {file} = await c.req.parseBody()
  
  if(file instanceof File){
    const fileData = await file.arrayBuffer()
    const fileName = file.name
    const ext = fileName.split('.').pop()
    
    try {
      console.log(c.env.R2LINK)
      const j = await c.env.R2BUCKET.put(`${nanoid()}.${ext}`, fileData)
      
      return c.json({
        file: `${c.env.R2LINK}/${j?.key}`
      })
    } catch (error) {
      if(error instanceof Error){
        return c.text(error.message, 400)
      }
    }

    return c.json({
      message: 'upload file success'
    })
  } else {
    return c.text('invalid file', 400)
  }

})

export default app
