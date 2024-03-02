import moment from "moment"


export function formatDates(date: any) {
    return moment(date).format('DD MM YYYY HH:mm A')

}

export function formatTime(date: any) {
    return moment(date).format('HH:mm A')
}
