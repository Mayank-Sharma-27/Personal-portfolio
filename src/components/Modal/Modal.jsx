import styles from './Modal.module.css';

export const  Modal =  ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className={styles.overlay}>
        <div className={styles.content}>
          <button className={styles.closeButton} onClick={onClose}>
            X
          </button>
          <iframe
            className={styles.resumeFrame}
            src="https://drive.google.com/file/d/1ltDuE3-Oqubn-EcDal7zkiWHncK8pZbS/view?usp=sharing"
            title="Resume"
          />
        </div>
      </div>
    );
}

