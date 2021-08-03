import S from './styles.module.css';

export default function Header() {
    return (
        <header className={S.header}>
            <h1 className={S.headerTitle}>SpaceX App</h1>
        </header>
    )
}