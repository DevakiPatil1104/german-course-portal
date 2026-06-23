function FAQAccordion({ items }) {
  return (
    <div>
      {items?.map((item) => (
        <details key={item.id}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  )
}

export default FAQAccordion
