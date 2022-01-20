export const dateFormat = fecha => {
    const fechanueva = new Date(fecha);
    const opts = {
        year:"numeric",
        month:'long',
        day:'2-digit'
    }
    return  fechanueva.toLocaleDateString('es-ES',opts)
}