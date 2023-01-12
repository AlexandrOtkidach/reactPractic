function SearchContact({searchFilter}) {
    
    return (
        <>
            <input className="contact-search" type="text" onChange={({target}) => searchFilter(target.value)} placeholder="Search"/>
        </>
    )
}

export default SearchContact

