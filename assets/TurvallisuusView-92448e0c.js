import{d as o,e as u,o as n,c as r,a as t,w as k,v,u as i,b as m}from"./index-30ebb466.js";const p={class:"turvallisuus"},c={class:"sisalto"},d=m("<h1>Turvallisuus</h1><p> Kaikessa aseen käytössä on noudatettava seuraavia turvallisen aseenkäsittelyn sääntöjä: </p><ol><li><b>Asetta on aina käsiteltävä kuin se olisi ladattu</b>. Ei ole merkitystä, onko ase ladattu tai onko ase toimimaton käsittelyase, käsitte- lyn on aina oltava samanlaista.</li><li>Piippukontrolli, <b>aseen piipun on aina osoitettava turvalliseen suuntaan</b>. &quot;Laser-sääntö&quot;, aseella ei saa koskaan osoittaa mitään sellaista, jota ei halua tuhota.</li><li>Sormivarmistus, <b>sormi pidetään pois liipaisimelta ennen ampumapäätöstä</b>. Liipaisinsormi on pidettävä tietoisesti aseen rungolla. Sormi laitetaan liipaisimelle vasta, kun on tehty tietoinen ampumapäätös.</li><li><b>Tunnista maali ja varmista tausta</b>. Maali on aina tunnistettava ennen kuin sitä ammutaan. Maalin takana ei saa olla omia taistelijoita tai sivullisia.</li></ol>",3),_={class:"turvallisuuscheckbox"},b=t("label",{for:"checkbox"},"Kaikki ampumakokeen osallistujat tuntevat yllä olevat turvalliset aseen käsittelyn säännöt.",-1),h={class:"actions jatka"},y=["disabled"],j=o({__name:"TurvallisuusView",setup(S){const a=u();return(l,s)=>(n(),r("main",p,[t("div",c,[d,t("div",_,[k(t("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>i(a).turvallisuuskoulutusSuoritettu=e),type:"checkbox"},null,512),[[v,i(a).turvallisuuskoulutusSuoritettu]]),b]),t("div",h,[t("button",{class:"action",disabled:!i(a).turvallisuuskoulutusSuoritettu,onClick:s[1]||(s[1]=e=>{i(a).turvallisuuskoulutusSuoritettu=!0,l.$router.push("/")})},"Jatka",8,y)])])]))}});export{j as default};
