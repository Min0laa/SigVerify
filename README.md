# SigVerify

SigVerify est une solution de workflow documentaire sécurisée qui intègre des signatures sur la blockchain XRPL pour une vérification immuable. Développé lors du XRPL Commons Residency et du HACKS Hackathon, il permet de gérer et signer des documents de manière transparente et sécurisée.


<img width="192" height="65" alt="Screenshot 2026-01-27 at 14 40 19" src="https://github.com/user-attachments/assets/b3fa3c9f-cfb7-43c0-94fd-311c39c0eeeb" />


## 🎯 Fonctionnalités

- **Gestion de documents** : Crée, gère et suit l'état de tes documents facilement
- **Signatures sur blockchain** : Les signatures sont enregistrées sur le ledger XRPL, garantissant l'immutabilité et la preuve d'existence
- **Tableau de bord complet** : Visualise les demandes en attente, les documents complétés et les statistiques
- **Authentification sécurisée** : Intégration avec Clerk pour une gestion robuste des utilisateurs
- **Templates prédéfinis** : Choisis parmi une collection de modèles de documents prêts à l'emploi
- **Gestion de profil** : Profils utilisateurs personnalisables avec options d'intégration KYC

## 🛠 Stack Technique

- **Framework** : [Next.js 14](https://nextjs.org/) avec App Router
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Styling** : [Tailwind CSS](https://tailwindcss.com/) & [Radix UI](https://www.radix-ui.com/)
- **Base de données** : [MongoDB](https://www.mongodb.com/)
- **Authentification** : [Clerk](https://clerk.com/)
- **Blockchain** : Intégration XRPL (XRP Ledger)
- **Signatures** : React Signature Canvas pour la capture de signatures manuscrites

## 📦 Installation

### Prérequis

- Node.js 18+ 
- npm ou yarn
- MongoDB (local ou cloud)
- Compte Clerk (gratuit)

### Étapes

1. **Clone le repository**
   ```bash
   git clone https://github.com/Min0laa/SigVerify.git
   cd SigVerify
   ```

2. **Installe les dépendances**
   ```bash
   npm install
   ```

3. **Configure les variables d'environnement**
   
   Crée un fichier `.env.local` à la racine du projet :
   ```env
   MONGODB_URI=ton_uri_mongodb
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=ta_clé_publique_clerk
   CLERK_SECRET_KEY=ta_clé_secrète_clerk
   ```

4. **Lance le serveur de développement**
   
   ⚠️ **Important** : Sur macOS, tu dois augmenter la limite de fichiers ouverts pour éviter les erreurs `EMFILE` :
   ```bash
   ulimit -n 10240 && npm run dev
   ```
   
   Sinon, utilise simplement :
   ```bash
   npm run dev
   ```

5. **Ouvre ton navigateur**
   
   Va sur [http://localhost:3000](http://localhost:3000)

## 🚀 Comment ça marche ?

### 1. Page d'accueil et inscription

La page d'accueil présente SigVerify et permet de s'inscrire rapidement via email.

![Landing Page] ![Uploading Screenshot 2026-01-27 at 13.57.01.png…]()


**Exemple d'utilisation** :
- Entre ton email dans le champ prévu
- Clique sur "Sign Up" pour créer ton compte
- Ou clique sur "Sign In" si tu as déjà un compte

### 2. Tableau de bord

Une fois connecté, tu accèdes au tableau de bord qui centralise toutes tes actions.

![Dashboard] <img width="1728" height="917" alt="Screenshot 2026-01-27 at 14 19 17" src="https://github.com/user-attachments/assets/36c0f3d8-10f3-46e3-8881-4d8763353377" />


**Fonctionnalités principales** :

- **Créer un nouveau document** : Clique sur la carte "Create Document" pour démarrer
- **Gérer tes documents** : Consulte la liste de tes documents (PDF, PowerPoint, Excel)
- **Demandes entrantes** : Traite les demandes de signature en attente

**Exemple concret** :
```
1. Tu cliques sur "Create Document"
2. Tu choisis un template ou crées un document vierge
3. Tu remplis les informations nécessaires
4. Tu envoies le document pour signature
```

### 3. Sélection de templates

SigVerify propose une collection de templates prédéfinis pour accélérer la création de documents.

![Templates] <img width="693" height="339" alt="Screenshot 2026-01-27 at 14 19 44" src="https://github.com/user-attachments/assets/a323fd55-ccfb-4762-90ac-839304202534" />


**Types de templates disponibles** :
- **Task Completion Form** : Pour suivre l'avancement de tâches (ex: Programme Ambassadeur Campus XRPL)
- **Certifications** : Formulaires de certification et validation
- **Documents médicaux** : Prescriptions et formulaires médicaux

**Exemple avec le template "Campus Ambassador Program"** :
```
1. Sélectionne le template "Ripple Pledge - Campus Ambassador Program"
2. Le formulaire pré-rempli s'affiche avec :
   - Section 1 : Compléter un projet sur XRP Ledger
   - Section 2 : Compléter un second projet
   - Section 3 : Organiser un meetup sur le campus
3. Remplis les initiales d'ambassadeur et d'administrateur
4. Sélectionne l'option de paiement selon le nombre de participants
5. Signe le document
```

### 4. Processus de signature

1. **Création du document** : Crée ou sélectionne un template
2. **Remplissage** : Complète les champs nécessaires
3. **Signature** : Utilise le pad de signature pour signer électroniquement
4. **Enregistrement sur blockchain** : La signature est enregistrée sur XRPL
5. **Vérification** : Le document signé est stocké et vérifiable à tout moment

## 📁 Structure du projet

```
SigVerify/
├── app/                    # Pages Next.js (App Router)
│   ├── dashboard/         # Tableau de bord
│   ├── create-document/   # Création de documents
│   ├── manage/            # Gestion des documents
│   ├── profile/           # Profil utilisateur
│   ├── sign-in/           # Page de connexion
│   └── sign-up/           # Page d'inscription
├── components/            # Composants React réutilisables
│   ├── navbar/           # Barre de navigation
│   ├── signature/        # Composant de signature
│   └── ui/               # Composants UI (boutons, cartes, tableaux)
├── lib/                  # Utilitaires et configurations
│   ├── mongodb.ts        # Connexion MongoDB
│   └── withAuth.tsx      # HOC d'authentification
├── public/               # Assets statiques
│   └── images/           # Images et screenshots
└── middleware.ts         # Middleware Clerk pour la protection des routes
```

## 🔒 Sécurité

- **Authentification** : Gérée par Clerk avec support multi-facteurs
- **Protection des routes** : Middleware pour protéger les pages sensibles
- **Signatures blockchain** : Immutabilité garantie par XRPL
- **Validation** : Vérification des signatures et des documents

## 🐛 Résolution de problèmes

### Erreur "EMFILE: too many open files"

Sur macOS, cette erreur est courante avec Next.js. Solution :

```bash
ulimit -n 10240 && npm run dev
```

### Erreur "missing bootstrap script"

Cette erreur survient quand le cache Next.js est corrompu. Solution :

```bash
rm -rf .next
npm run dev
```

### Problèmes de connexion Clerk

Vérifie que tes clés dans `.env.local` sont correctes et que ton application Clerk est bien configurée pour accepter `localhost:3000` comme URL autorisée.

## 📝 Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Compile l'application pour la production
- `npm run start` : Lance le serveur de production
- `npm run lint` : Vérifie le code avec ESLint

## 🤝 Contribution

Ce projet a été développé lors d'un hackathon. Les contributions sont les bienvenues !

## 📄 License

Ce projet est open-source et disponible sous la [MIT License](LICENSE).

## 🔗 Liens utiles

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Clerk](https://clerk.com/docs)
- [Documentation XRPL](https://xrpl.org/docs.html)
- [Documentation MongoDB](https://www.mongodb.com/docs/)

---

Développé avec ❤️ lors du XRPL Commons Residency et HACKS Hackathon
