async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/Thamyresarm/dio-formacao-JavaScript/main/DesafiosdeProjetos/Portifolio/data/profile.json';
    const fetching = await fetch(url);
    return fetching.json();
}