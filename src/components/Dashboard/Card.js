import '../../styles//Dashboard/Card.css'




function Card() {
    const posts = [
        {
            id: 1,
            "title": "Tokka",
            "body": "Tokka is drinking lemon juice",
        },
        {
            id: "2",
            "title": "Adel",
            "body": "Adel is Eating Apples"
        },
        {
            id: "3",
            "title": "Adel",
            "body": "Adel is Eating Apples"
        }
    ]
    return (
        <div className='cards-content'>
            {posts.map(post => (
                <div key={post.id} className="each">
                    <h3 className='card-title'>{post.title}</h3>
                    <p className="card-body">{post.body}</p>
                </div>))}
        </div>
    );
}

export default Card