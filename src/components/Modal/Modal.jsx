import styles from './Modal.module.css';

export const  Modal =  ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.content}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <iframe className={styles.resumeFrame} src="https://drive.google.com/file/d/15UsfENyoaI0TNxi0iftmu9eS182cZ7GK/preview" title="Resume" />
            </div>
        </div>
    );
}

