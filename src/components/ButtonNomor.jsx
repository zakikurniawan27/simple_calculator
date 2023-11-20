function ButtonNomor({nama, handleKlik, label}) {
    return(
        <button name={nama} className="rounded-md bg-warna4 h-12 text-black" onClick={handleKlik}>
            {label}
        </button>
    )
}

export default ButtonNomor