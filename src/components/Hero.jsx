import React from 'react'
import Button from '../common/Button'
import hero_img from '../assets/image/hero.png'
import hero_one from '../assets/image/hero_brand_one.svg'
import hero_two from '../assets/image/hero_brand_two.svg'
import hero_three from '../assets/image/hero_brand_three.svg'
import hero_four from '../assets/image/hero_brand_four.svg'

const Hero = ({ handleActive }) => {
  const imgs = [hero_one, hero_two, hero_three, hero_four]
  return (
    <div className="hero">
      <div className="section-wrapp">
        <div className="container">
          <ul className="hero_list">
            <li className="hero_item">
              <p className="hero_subheading">
                Naqsh Market
              </p>
              <h1 className="hero_heading">Savdo nazorati,
                ko’ngil halovati</h1>
              <p className="hero_text">
                Naqsh Market dasturi orqali tovarlaringiz ustidan va qolaversa biznesingiz ustidan
                nazorat o’rnating.
              </p>
              <div className="hero_links">
                <Button handleActive={handleActive} label="Bepul sinab ko'rish" />
                <Button handleActive={handleActive} label="Sotib olish" />
              </div>
              <p className="hero_lower_info">
                Naqsh Market dasturidan foydalanuvchi bizneslar
              </p>
              <ul className="hero_companies">
                {
                  imgs.map((img) => (
                    <li className="hero_companies_item" key={img}>
                      <img src={img} alt="" />
                    </li>
                  ))
                }
              </ul>
            </li>
            <li className="hero_item">
              <img src={hero_img} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Hero
