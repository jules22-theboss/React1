import styles from "./Team.module.css"

export default function Team ( { children }) {
 
    return (
        <div className={styles.team}>
            { children }
        </div>
    )
}