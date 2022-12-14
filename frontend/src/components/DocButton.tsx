export const DocButton = () => {
    return (
        <a href="google.com" target={"blank"} className="flex items-center space-x-6 md:space-x-3 text-xl font-bold text-white uppercase py-4 px-10 rounded-2xl select-none button-gradient-animation w-80 md:w-[400px]">
            <svg width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.1367 0.0031185C27.9898 0.181708 21.7351 0.831753 17.8739 3.19534C17.6075 3.35843 17.4565 3.64842 17.4565 3.95162V24.8467C17.4565 25.5099 18.1817 25.9291 18.7933 25.6213C22.7659 23.6218 28.5112 23.0763 31.352 22.927C32.3219 22.8758 33.0759 22.0983 33.0759 21.1663V1.76605C33.0765 0.749062 32.1944 -0.0566029 31.1367 0.0031185ZM15.202 3.19534C11.3413 0.831753 5.08666 0.182283 1.9398 0.0031185C0.882039 -0.0566029 0 0.749062 0 1.76605V21.1669C0 22.0995 0.753983 22.877 1.72388 22.9275C4.56582 23.0768 10.314 23.6229 14.2866 25.6236C14.8965 25.9308 15.6194 25.5122 15.6194 24.8507V3.94129C15.6194 3.63751 15.469 3.359 15.202 3.19534Z" fill="white" />
            </svg>
            <span>Read the documentation</span>
        </a>
    )
}