import React, { Component } from 'react'
import { render } from 'react-dom'

class Card extends Component {
  renderContent() {
    const {title, subtitle} = this.props

    return (
      <div>
        <h1 style={styles.title}>{title}</h1>
        {subtitle ? (
          <h2 style={styles.subtitle}>{subtitle}</h2>
        ) : (
          <h3 style={styles.empty}>No subtitle</h3>
        )}
      </div>
    )
  }

  render() {
    const {loading, error} = this.props

    let content

    if (error) {
      content = 'Error'
    } else if (loading) {
      content = (
        <h3 style={styles.empty}>Loading...</h3>
      )
    } else {
      content = this.renderContent()
    }

    return (
      <div style={styles.card}>
        {content}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Card loading={true} />
        <Card error={true} />
        <Card title={'Title'} subtitle={'Subtitle'} />
      </div>
    )
  }
}

const styles = {
  card: {
    padding: 20,
    margin: 20,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'skyblue',
    border: '1px solid rgba(0,0,0,0.15)',
  },
  title: {
    fontSize: 18,
    lineHeight: '24px',
  },
  subtitle: {
    fontSize: 14,
    lineHeight: '18px',
  },
  empty: {
    fontSize: 12,
    lineHeight: '15px',
    opacity: 0.5,
  }
}


export default App
