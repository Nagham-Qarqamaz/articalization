export const formatDate = (date: string) => {
    return new Date(date).toLocaleString(
        "en-US",
        {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZoneName: "short",
        }
    );
}