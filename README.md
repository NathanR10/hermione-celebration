# Hermione Celebration

Hermione Celebration is a simple and lightweight modal package for React.

## Installation

To install Hermione Celebration, you can use npm:

```bash
npm install hermione-celebration
```

## Usage

```
import Celebrate from 'hermione-celebration'

<Celebrate {props} />
```

| Prop's name  | Type | Default value | Description | Required |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| duration | Number | 2500 | Animation duration in ms | No |
| showProb  | Number  | 4 | Chance to trigger animation (1/showProb) | No |
| specialProb  | Number | 10 | Chance to trigger special animation (1/specialProb). It will only trigger after showProb trigger | No |

## Example usage

```
import ValidTask from './ValidTask'

const validTask = new ValidTask({
  duration: 2500, // optional
  showProb: 4, // optional
  specialProb: 10 // optional
})

document.body.appendChild(validTask)

```
