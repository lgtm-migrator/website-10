---
title: Kompozitní publikace
description: Reaktivně zveřejňuje výběr z více kolekcí, které závisejí na údajích z předchozí kolekce.
lang: cs-CZ
---

`publishComposite(...)` poskytuje flexibilní způsob, jak publikovat set souvisejících dokumentů z různých kolekcí pomocí reaktivního spojení. Díky tomu je snadné publikovat celý strom dokumentů najednou. Zveřejněné kolekce jsou reaktivní a budou aktualizovány při přidání/změnách/mazání.

Tento projekt se liší od mnoha dalších mapování vztahů rodiče/dítěte ve své flexibilitě. Vztah mezi rodiči a jeho dětmi může být založen téměř na cokoliv. Například řekněme, že máte stránku, která zobrazuje novinkové články. Na každé stránce článku byste chtěli zobrazit seznam na konci obsahující několik příbuzných článků. Pro publikování primárního článku můžete použít `publishComposite`, vzít klíčová slova, která se pak používají pro hledání jiných článků, a publikovat tyto související články jako děti. Samozřejmě, výběr klíčového slova a vyhledávání je na vás, abyste implementovali.

## Správci
* [Sean Dwyer](https://github.com/reywood)
* [Jan Dvořák](https://github.com/sponsors/StorytellerCZ)
* [Kelly Copley](https://github.com/sponsors/copleykj)

## Balíček
* [GitHub repozitář](https://github.com/Meteor-Community-Packages/meteor-publish-composite)
* [Packosphere](https://packosphere.com/reywood/publish-composite)

