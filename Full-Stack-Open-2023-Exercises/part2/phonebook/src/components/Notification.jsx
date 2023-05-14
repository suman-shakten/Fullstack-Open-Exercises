const Notification = ({ message }) => {
    if (!message) {
        return null;
    }

    const className = message.type === 'success' ? 'success' : 'error';

    return (
        <div className={className}>
            {message.text}
        </div>
    )
}

export default Notification;