import React from 'react'

export default function Admin () {
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [beschreibung, setBeschreibung] = useState('');
    const [preis, setPreis] = useState('');
    
    const handleNewProduct = async (e) =>{
        e.preventDefault();
        try{
            
        }catch(error){
            console.log(error);
        }
    }



  return (
    <>
        <h1>Ein neues Produkt hinzufügen</h1>
        <form onSubmit={handleNewProduct}>
            <label>
                Image:
                <input type="file" name="image"/>
            </label>
            <label>
                Name:
                <input type="text" name="name"/>
            </label>
            <label>
                Beschreibung:
                <input type="text" name="beschreibung"/>
            </label>
            <label>
                Preis:
                <input type="number" name="Preis"/>
            </label>
            <button>Hinzufügen</button>

        </form>
    </>
  )
}
