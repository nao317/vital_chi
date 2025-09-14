'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState } from 'react'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    // Supabase環境変数のチェック
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
        return (
            <div style={{ padding: '20px' }}>
                <h1>設定エラー</h1>
                <p>Supabaseの環境変数が設定されていません。</p>
                <p>.env.localファイルに以下の変数を設定してください：</p>
                <ul>
                    <li>NEXT_PUBLIC_SUPABASE_URL</li>
                    <li>NEXT_PUBLIC_SUPABASE_ANON_KEY</li>
                </ul>
            </div>
        )
    }

    const supabase = createClientComponentClient()

    const handleLogin = async () => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })
            if (error) {
                setMessage(error.message)
            } else {
                setMessage('Login successful!')
                console.log('JWT:', data.session?.access_token) // Goサーバーに送信可能
            }
        } catch (error) {
            setMessage('ログイン中にエラーが発生しました: ' + (error as Error).message)
        }
    }

    return (
        <div>
            <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <p>{message}</p>
        </div>
    )
}
