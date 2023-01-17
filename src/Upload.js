import { useState } from 'react' 
import { CirclesWithBar } from 'react-loader-spinner'
import upload from './upload-removebg-preview.png'

const Upload = () => {

    const [result, setResult] = useState(null)
    const [restored, setRestored] = useState(false)
    const [colorized, setColorized] = useState(false)
    const [fetching, setFetch] = useState(false)

    const imageChange = e => {
        if (e.target.files && e.target.files.length > 0) {
            setResult(e.target.files[0])
        }
    }


    const doRestored = (event) => {
        event.preventDefault()
        setFetch(true)
        const form = new FormData()
        form.append("file", result)
        fetch('https://resphot-apps-resphot-apps-meisastrajayadi.cloud.okteto.net/upload-image', {
            method: 'POST', 
            body : form 
        })
            .then(response => response.blob())
            .then(imageData => {
                setResult(imageData)
                setRestored(true)
                setFetch(false)
            })
            .catch(error => {setFetch(false); console.log(error)})
    }

    const doColorized = (event) => {
        event.preventDefault()
        setFetch(true)
        const form = new FormData()
        form.append("file", result)
        fetch('https://resphot-apps-resphot-apps-meisastrajayadi.cloud.okteto.net/coloring', {
            method: 'POST', 
            body : form 
        })
            .then(response => response.blob())
            .then(imageData => {
                setResult(imageData)
                setColorized(true)
                setFetch(false)
            })
            .catch(error => {setFetch(false); console.log(error)})
    }

    return (
        <div className="upload">
            <div className="upload-border">
                {fetching && 
                    <CirclesWithBar
                      height="80"
                      width="80"
                      radius="9"
                      color="#3C79F5"
                      ariaLabel="loading"
                      wrapperStyle
                      wrapperClass
                    />
                }
                {(result && !fetching) && 
                <div id='wrapper'>
                    {restored && 
                        <div className='two-btn'>
                            <button><a href={URL.createObjectURL(result)} download>Download</a></button>
                            {!colorized && <button onClick={doColorized}>Colorized</button>}
                            <button onClick={() => {setResult(null); setRestored(false); setColorized(false)}}>Cancel</button>
                        </div>
                    }
                    {!restored && <button id="restored-btn" onClick={doRestored}>Restored</button>}
                    <img id='preview' src={URL.createObjectURL(result)} alt='hasil'/>
                </div>}
                {(!result && !fetching) && 
                <div>
                    <img src={upload} alt='upload logo'/>
                    <div className='for-file'>
                        <label>
                            Upload Here
                            <input accept='image/*' onChange={imageChange} type='file'/>
                        </label> 
                    </div>
                </div>
                }
            </div> 
        </div>
    )
}

export default Upload; 
