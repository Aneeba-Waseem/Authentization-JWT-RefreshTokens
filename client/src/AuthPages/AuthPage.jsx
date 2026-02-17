import React, { useState } from 'react'
import { motion } from "framer-motion";
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
  return (
    <div
    className="w-full lg:w-[50vw] min-h-screen flex flex-col items-center justify-center p-4 sm:p-12"
>
    <motion.div
        className="w-full mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
    >
        <div className="text-center mb-8">
            <motion.h2
                key={isLogin ? "login" : "signup"} // triggers re-animation on toggle
                initial={{ opacity: 0, x: -50 }}    // start from the left
                animate={{ opacity: 1, x: 0 }}      // slide in
                exit={{ opacity: 0, x: 50 }}        // optional (if you use AnimatePresence)
                transition={{
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],   // smooth cubic-bezier easing
                }}
                className="text-5xl font-bold mb-1"
                style={{ fontFamily: 'Oswald, monospace' }}
            >
                {isLogin ? "Welcome Back" : "Get Started"}
            </motion.h2>

            <motion.p
                className=""
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {isLogin
                    ? "Sign in to your recruiter account"
                    : "Create your recruiter account"}
            </motion.p>
        </div>

        {isLogin ? <LoginForm /> : <SignUpForm />}

        <motion.div
            className="mt-1 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
        >
            <p className="">
                {isLogin
                    ? "Don't have an account? "
                    : "Already have an account? "}
                <button
                    onClick={() => setIsLogin(!isLogin)}
                    className=" hover: font-semibold underline transition-colors duration-200"
                >
                    {isLogin ? "Sign Up" : "Sign In"}
                </button>
            </p>
        </motion.div>
    </motion.div>
</div>
  )
}

export default AuthPage
