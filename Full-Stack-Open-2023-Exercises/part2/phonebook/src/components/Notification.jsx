const Notification = ({ message }) => {
    if (!message) {
        return null;
    }

    return (
        <div className={message.type === 'success' ? 'success' : 'error'}>
            {message.text}
        </div >
    )
}

export default Notification;
