import { registerAuthor } from "@/lib/serverActions";

export default function RegisterPage() {
    return (
        <div>

            <form action={registerAuthor} className="max-w-125 mx-auto flex flex-col gap-y-5" >

                <input name="email" placeholder="Email" type="email" />
                <input name="username" placeholder="Username" type="text" />
                <input name="password" placeholder="Password" type="password" />
                <button>Зарегистрироваться</button>

            </form>

        </div>
    )
}
