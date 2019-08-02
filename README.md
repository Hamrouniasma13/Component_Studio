# EB Components

Designed to be used as Identity provider for our websites

# Component Studio 1.1.1

Welcome to Digital Studio's components library.
As a developer, a designer, or a CMS contributor, you can found here the components that you'll use to build your website.

## Installation

```bash
$ npm i component-studio
```

## Get started

Import the component-studio

```javascript
import {
  ThemeProvider,
  Container,
  Header,
  Footer,
  Text,
  ActionBanner,
  Slice,
  Button,
} from 'component-studio'
```

In order to make our components looks nicely, we have few stuff to add first:

- Use the `<ThemeProvider />` by wrapping all your pages inside.
- Add a `<Footer />` and a `<Header/>`
- Add a `<ActionBanner />` just after the `<Header />`
- Wrap every pages that is not a `template` inside a `<Container />` component. It will add margins and add some responsive behavior to it.
- Add whatever you want inside `<Container />`!

## Quick example

Here is a snippet you can use to kickstart any project !

```javascript
import {
  ThemeProvider,
  Container,
  Header,
  Footer,
  Text,
  ActionBanner,
  Slice,
  Button,
} from 'component-studio'

function App() {
  return (
    <ThemeProvider>
      <Header
        links={[
          {
            url: '/app/logout',
            label: 'Contact',
            icon: 'powerbutton',
          },
        ]}
        logo={{
          alt: 'Neuralook',
          src: 'https://via.placeholder.com/60?Text=Logo',
        }}
        menu={[
          {
            icon: 'file',
            label: 'Contrats',
            url: 'https://google.com',
          },
          {
            icon: 'users',
            label: 'Salariés',
            url: 'https://google.com',
          },
          {
            icon: 'services',
            label: 'Services',
            url: 'https://google.com',
          },
        ]}
      />

      <ActionBanner
        title="Lorem ipsum"
        description="Aute officia nisi exercitation nulla dolor veniam ad et labore consectetur ut sunt ea pariatur."
      />
      <Container>
        <Slice>
          <Text.h1>Lorem</Text.h1>
          <Text.p>
            Enim non sint magna esse. Sit dolore velit minim nostrud nisi ipsum
            consequat labore. Voluptate dolor eiusmod anim enim adipisicing
            proident commodo voluptate consectetur officia sit ullamco pariatur
            aute. Excepteur nostrud exercitation minim exercitation enim laborum
            est eu laboris quis est. Est magna aliqua elit eiusmod cillum dolore
            id. Excepteur non deserunt fugiat dolore velit veniam fugiat anim
            consequat proident consequat excepteur aliquip.
          </Text.p>
          <Button href="/" icon="cog" iconPosition="left">
            Click me
          </Button>
        </Slice>
      </Container>
      <Footer
        link={{ label: 'Mentions légales', url: '/' }}
        socials={[
          {
            icon: 'cog',
            url: 'http://wwww.twitter.com',
          },
        ]}
        copyright={'© 2019 All Rights Reserved'}
      />
    </ThemeProvider>
  )
}

export default App
```

## Develop component

After you clone this project, you can start to develop component inside `src/components` or `src/slices`, and export them from the main `index.js`.
If you want to see if your component is good, refer to the following section, playground.

## Playground

The playground is the main website for component-studio. It allows you to see which components exists, what they looks like, how you can use them, and how they will look with your data.

You can see it right now at https://design.digitalstudio.tech. On each component, you can deploy the editor, and start hacking. The component will automatically update with your data.

### Add component to the playground

One a new component is developed, you may want to add it to the playground. Be sure that it's exported from `eb-components-2`, then create a new file `my-component.mdx` either on `playground/components` or `playground/slices`.

Once the `my-component.mdx` is complete, import it in [playground config](playground/components.js).

### Development

`yarn play`
