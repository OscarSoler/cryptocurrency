import "./mainlayout.scss"

type MainLayoutProps = {
	children?: JSX.Element | JSX.Element[]
}

function MainLayout({children}: MainLayoutProps) {
	return <div className="mainlayout">{children}</div>
}

export default MainLayout
