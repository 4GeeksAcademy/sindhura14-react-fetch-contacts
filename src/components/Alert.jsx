

export default function Alert({alertType, message}) {

    const classNames = "alert text-center " + alertType; 

    return (
        <div className={classNames} role="alert">
            {message}
        </div>
    )
};
