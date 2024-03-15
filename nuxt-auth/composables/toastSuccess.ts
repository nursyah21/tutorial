export default function(text:string) {
    const toast = useToast()
    return toast.add({
        id: 'success',
        title: text,
        icon: 'i-ph-check',
        color: 'green',
        timeout: 3000
    })
}