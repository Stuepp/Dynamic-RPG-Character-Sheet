function updateModifiers(){ // make it better..
  //convert ability scores into modifiers
  const Scorelist = ['strScore', 'dxtScore', 'conScore', 'intScore', 'wisScore', 'carScore']
  const Modlist = ['strMod', 'dxtMod', 'conMod', 'intMod', 'wisMod', 'carMod']
  for(let i = 0; i < Scorelist.length; i++){
    let Score = document.getElementById(Scorelist[i]).value
    document.getElementById(Modlist[i]).value = Math.floor((Score-10)/2) 
  }
  setSkills()
}
function updateProfBonus(){
  // update proficiency bonus based on Player level
  let playerLevel = parseInt(document.getElementById("playerLevel").value)
  const levelList = [5,9,13,17]
  const bonusList = [3,4,5,6]
  for(let i = 0; i < levelList.length;i++){
    if(playerLevel>=levelList[i]){
      document.getElementById("profBonus").value = bonusList[i]
    }
  }
  if(playerLevel < 5){
    document.getElementById("profBonus").value = 2
  }
}
function setSkills(){
  const SkillsProflist = ['acroProf','ahProf','arcProf','athProf','decProf','histProf','insProf','intimProf','investProf','medProf','natProf','perProf','reliProf','perfProf','persProf','sohProf','stealthProf','survProf']
  const SkillsScorelist = ['acroScore','ahScore','arcScore','athScore','decScore','histScore','insScore','intimScore','investScore','medScore','natScore','perScore','reliScore','perfScore','persScore','sohScore','stealthScore','survScore']
  const strSkills = ['athProf']
  const dextSkills = ['acroProf','sohProf','stealthProf']
  const intSkills = ['histProf','investProf','natProf','reliProf']
  const wisSkills = ['ahProf','insProf','medProf','perProf','survProf']
  const carSkills = ['decProf','intimProf','perfProf','persProf']
  const Skills = [strSkills, dextSkills, intSkills, wisSkills, carSkills]
  let profBonus =  parseInt(document.getElementById("profBonus").value)
  const Modlist = ['strMod', 'dxtMod', 'conMod', 'intMod', 'wisMod', 'carMod']
  for(let i = 0; i < SkillsProflist.length; i++){
    if(document.getElementById(SkillsProflist[i]).checked == true){
      document.getElementById(SkillsScorelist[i]).value = profBonus
    }
    for(let j = 0; j < Skills.length; j++){
      if(Skills[j].includes(SkillsProflist[i])){
        document.getElementById(SkillsScorelist[i]).value = parseInt(document.getElementById(Modlist[j]).value) + parseInt(document.getElementById(SkillsScorelist[i]).value)
      }
    }
  }
}
function playerLevelChange(){
  updateProfBonus()
  updateModifiers()
  setSkills()
}
