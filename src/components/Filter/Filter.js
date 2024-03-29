import "./Filter.css"

export default function Filter({title,filterName,filterCharacter}) {
    return(
        <div className="form-check form-switch filtroIndividual px-5 py-2">
            <input className="form-check-input colorFilter" type="checkbox" role="switch" id={filterName} value={filterName} onClick={(event)=>filterCharacter(event.target)} />
            <label className="form-check-label" htmlFor={filterName}>{title}</label>
        </div>
    
    )
}
//checkbox



