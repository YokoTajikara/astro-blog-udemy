import { useState } from "preact/hooks"

export default function Greeting({ message }) {
	const [greeting, setGeeting] = useState(message[0])

	const randomMessage = () => {
		message[Math.floor(Math.random() * message.length)]
	}

	return (
		<div>
			<h3>{greeting}訪問いただきまして、ありがとうございます！</h3>
			<button onClick={() => setGeeting(randomMessage())}>新しい挨拶</button>
		</div>
	)
}