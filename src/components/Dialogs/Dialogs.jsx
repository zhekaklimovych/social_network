import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';

const Dialogs = () => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog userName='Alex' />
                <Dialog userName='David' />
                <Dialog userName='Nick' />
                <Dialog userName='John' />
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    hello
                </div>
                <div className={s.message}>
                    how are u?
                </div>
                <div className={s.message}>
                    Yo
                </div>
                <div className={s.message}>
                    Hehe
                </div>
            </div>
        </div>
    )
}

export default Dialogs;