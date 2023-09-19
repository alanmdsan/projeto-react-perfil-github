import styles from './Perfil.module.css'

// const Perfil = ({ props }) => {
// desestruturação de props em avatar e nome
// const Perfil = ({ avatar, nome }) => {
const Perfil = ({ nomeUsuario }) => {
    return (
        <header className={styles.header}>
            {/* {JSON.stringify(props)} */}
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt={nomeUsuario} />
            <h1 className={styles.name}>{nomeUsuario}</h1>
        </header>
    )
}

export default Perfil