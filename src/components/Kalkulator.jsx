import React,{ useState } from "react"
import * as math from 'mathjs'
import { FiDelete } from "react-icons/fi";
import ButtonNomor from "./ButtonNomor";

const Kalkulator = () =>{
    
    const [hasil, setHasil] = useState('')

    
    const handleKlik = (e) =>{
        setHasil(hasil.concat(e.target.name).toString());
    }
    
    const bersih = () => {
        setHasil('')
    }
    
    const hapus = () =>{
        setHasil(hasil.slice(0, -1))
    }

    const hitung = () =>{
        try {
            setHasil(math.evaluate(hasil).toString())
        } catch (error) {
            setHasil('error')
            setHasil('')
        }
    }

    return(
        <div className="h-128 w-96 bg-warna1 border-4 rounded-md">
            <form>
                <input className="bg-warna3 text-black h-36 w-94 text-end text-5xl" type="text" value={hasil} onChange={(e) => setHasil(e.target.value)}/>
            </form>
            <div className=" grid grid-cols-4 gap-2 mt-3 text-black">
                <button name='/' className="rounded-md bg-warna2 h-11" onClick={handleKlik} >
                    &divide;
                </button>
                <button name="*" className="rounded-md bg-warna2 h-11" onClick={handleKlik} >
                    &times;
                </button>
                <button className=" rounded-md bg-warna2 h-11 col-span-2" onClick={bersih} >
                    <div className="flex justify-center">
                        <p> C </p>
                    </div>
                </button>
                <ButtonNomor nama={7} handleKlik={handleKlik} label={7}/>
                <ButtonNomor nama={8} handleKlik={handleKlik} label={8}/>
                <ButtonNomor nama={9} handleKlik={handleKlik} label={9}/>
                <button className="rounded-md bg-warna2 h-11" onClick={hapus} >
                    <div className="flex justify-center">
                        <FiDelete className="text-md"/>
                    </div>
                </button>
                <ButtonNomor nama={4} handleKlik={handleKlik} label={4}/>
                <ButtonNomor nama={5} handleKlik={handleKlik} label={5}/>
                <ButtonNomor nama={6} handleKlik={handleKlik} label={6}/>
                <button name="-" className="rounded-md bg-warna2 h-11" onClick={handleKlik} >
                    &ndash;
                </button>
                <ButtonNomor nama={1} handleKlik={handleKlik} label={1}/>
                <ButtonNomor nama={2} handleKlik={handleKlik} label={2}/>
                <ButtonNomor nama={3} handleKlik={handleKlik} label={3}/>
                <button name="+" className="rounded-md bg-warna2 h-11" onClick={handleKlik} >
                    +
                </button>
                <ButtonNomor nama={0} handleKlik={handleKlik} label={0}/>
                <ButtonNomor nama={'.'} handleKlik={handleKlik} label={'.'}/>
                <button className=" rounded-md bg-warna2 h-11 col-span-2" onClick={hitung} >
                    <div className="flex justify-center">
                        <p> = </p>
                    </div>
                </button>
            </div>
        </div>
    )
}


export default Kalkulator