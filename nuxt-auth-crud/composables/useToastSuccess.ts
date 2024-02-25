
export default function(text:string) {
    const toast = useToast()
    // const theme = useColorMode()
    return toast.add({
        id: 'success',
        title: text,
        icon: 'i-ph-check',
        color: 'green',
        timeout: 5000
    })
}