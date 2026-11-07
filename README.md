# Associação São Salvador de Capoeira e Cultura

Site institucional responsivo em React + Vite. As fotografias HEIC foram convertidas para WebP e estão em `public/assets`; a marca enviada está em `public/assets/ass.png`. Os dois vídeos enviados também foram preservados em `public/assets`.

## Executar

Requer Node.js 18 ou superior.

```bash
npm install
npm run dev
```

Para gerar uma versão de produção: `npm run build`; para pré-visualizar: `npm run preview`.

## Mapa

O mapa mostra Alto Boa Vista, Cariacica–ES como área aproximada, pois não foi fornecido endereço ou coordenada exata. O botão abre a busca do local no Google Maps.

Para ativar o mapa incorporado da Google Maps Platform, habilite a Maps Embed API no projeto Google Cloud e configure uma chave restrita ao domínio do site em `.env.local`:

```env
VITE_GOOGLE_MAPS_API_KEY=sua_chave_restrita
```

O exemplo da variável está em `.env.example`. Não publique uma chave sem restrições; variáveis `VITE_` são entregues ao navegador.
