import {Desafio5} from '../Desafio5';
import {waitFor, render, getNodeText} from '@testing-library/react'
import user from '@testing-library/user-event'
describe('Desafio5',()=>{
  it('Deve ser Renderizado com os valores corretos 1',async ()=>{
    const  component = render(<Desafio5 />)
    const btn1 =await component.getByTestId('btn1')
    const size =await component.getByTestId('size')
    await user.click(btn1)
    await user.click(btn1)
    await user.click(btn1)
    await user.click(btn1)
    await user.click(btn1)
    await user.click(btn1)
    await user.click(btn1)
    await user.click(btn1)
    await waitFor(()=>expect(getNodeText(size)).toEqual('8'))
    expect(component).toMatchSnapshot()
  })
  it('Deve ser Renderizado com os valores correto 2',async ()=>{
    const  component = render(<Desafio5 />)
    const btn1 =await component.getByTestId('btn1')
    const size =await component.getByTestId('size')
    await user.click(btn1)
    await user.click(btn1)
    await user.click(btn1)
    await user.click(btn1)
    await user.click(btn1)
    await user.click(btn1)
    await user.click(btn1)
    await user.click(btn1)
    await user.click(btn1)
    await user.click(btn1)
    await waitFor(()=>expect(getNodeText(size)).toEqual('10'))
    expect(component).toMatchSnapshot()
  })
})
