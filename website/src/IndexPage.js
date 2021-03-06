import React, {Suspense} from 'react'

import {Badges} from './components/Badges'
import Layout from './components/Layout'

const IconExplorer = React.lazy(() => import('./components/IconExplorer'))

const IndexPage = () => (
  <Layout>
    <div>
      <h1>
        Styled Icons{' '}
        <span role="img" aria-label="icon">
          💅
        </span>
      </h1>
      <Badges />

      <p>
        Import icons from the <a href="https://feathericons.com/">Feather</a>,{' '}
        <a href="https://fontawesome.com/">Font Awesome (free)</a>,{' '}
        <a href="https://material.io/icons/">Material</a>, or{' '}
        <a href="https://octicons.github.com/">Octicons</a> icon packs as{' '}
        <a href="https://www.styled-components.com/">Styled Components</a>
      </p>

      <code className="demo">
        {`
import styled from 'styled-components'
import {Zap} from 'styled-icons/octicons/Zap'

const RedZap = styled(Zap)\`
  color: red;
\`

const App = () => <RedZap />
    `.trim()}
      </code>

      <p>
        <a href="https://github.com/jacobwgillespie/styled-icons">View documentation on GitHub</a>
      </p>

      <h2>Icon Explorer</h2>

      <Suspense fallback={<div>Loading...</div>}>
        <IconExplorer />
      </Suspense>
    </div>
  </Layout>
)

export default IndexPage
