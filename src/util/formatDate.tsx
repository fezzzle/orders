import moment from "moment/moment";

export default function getFormattedDateStamp(dateStr: string) {
    const date = moment(dateStr);
    return date.format('DD.MM.YYYY');
}