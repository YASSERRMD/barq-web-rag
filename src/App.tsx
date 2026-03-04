import { LLMProvider } from './hooks/LLMProvider'
import { AppShell } from './components/AppShell'

export default function App() {
    return (
        <LLMProvider>
            <AppShell />
        </LLMProvider>
    )
}
