import "./errorMessage.scss"

type ErrorMessageProps = {
	message: string
}

function ErrorMessage({message}: ErrorMessageProps) {
	return <div className="errorMessage">Error: {message}</div>
}

export default ErrorMessage
