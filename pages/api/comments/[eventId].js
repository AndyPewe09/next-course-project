export default function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.include("@" || !name || name.trim() === "" || text.trim() === "")
    ) {
        res.status(422).json({message: 'Invalid Input'})
        return
    }

    const newComment = {
        id: new Date().toISOString,
        email,
        name,
        text
    }

    console.log(newComment)

    res.status(201).json({message: 'Added Comment', commemt: newComment})
  }

  if (req.method === "GET") {

    const dummyList = [
        {id: 'c1', name: 'Max', text: 'A first comment'},
        {id: 'c2', name: 'Maxi', text: 'A second comment'},
    ]

    res.status(200).json({comments: dummyList})

  }
}
