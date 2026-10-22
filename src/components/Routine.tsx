import { routine } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Routine() {
  return (
    <div className="routine-wrap">
      <Reveal>
        <h3 className="routine-title">Um dia na Blaze</h3>
      </Reveal>
      <div className="routine">
        {routine.map((item, i) => (
          <Reveal key={item.time} delay={i * 90} className="routine__cell">
            <div className="routine__item">
              <span className="routine__bubble">
                <Icon name={item.icon} />
              </span>
              <strong className="routine__time">{item.time}</strong>
              <span className="routine__label">{item.title}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
