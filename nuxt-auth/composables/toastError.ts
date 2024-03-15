export default function(text:string) {
    const toast = useToast()
    return toast.add({
        id: 'error',
        title: text,
        icon: 'i-ph-warning-circle',
        color: 'red',
        timeout: 3000
    })
}