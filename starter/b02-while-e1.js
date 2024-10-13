/*****************************
 * 6. BOUCLES ET ITÉRATIONS
 * BOUCLE = STRUCTURE DE CONTRÔLE N° 2 = MOYEN DE RÉPÉTER DES INSTRUCTIONS
 */

/* 6.2. Boucle WHILE
  La boucle `while` permet de répéter des instructions tant qu'une condition est vérifiée.
  Syntaxe :
    while (condition) {
      // instructions exécutées tant que la condition est vérifiée
    }
*/

/* EXEMPLE 1 :
Affichez
- Début du programme
- les nombres de 1 à 5 à l'aide d'une boucle WHILE
- Fin du programme
*/

let i=1;//si on dit que ça vaux 5, qui est le dernier chiffre accepter, alors seul 5 s'affiche
while (i<=5){
    console.log(i);
    i++
}
