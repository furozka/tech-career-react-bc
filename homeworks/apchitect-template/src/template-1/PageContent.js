import React from 'react'
import ProjectSection from './ProjectSection'
import About from './About'
import Content from './Content'
import Images from './Images'

function PageContent() {
  return (<><div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
        <ProjectSection></ProjectSection>
        <About></About>
        <Content></Content>
        <Images></Images>
    </div>
    </>
  )
}

export default PageContent