export default function() {
    const theme = useColorMode()
    return theme.value == 'dark' ? 'primary' : 'blue'
}