/* generated from the quiz page; edit there, then re-split */
window.QUIZ_BANKS = [
{
  name: "Module 1 - Mathematical Formalism of Probability",
  questions: [
  {
    type: "one",
    q: "According to the course definitions, what is an <em>experiment</em>?",
    options: [
      "A process leading to two or more outcomes where there is uncertainty about which will occur",
      "Any repeated trial whose long-run frequency can be measured",
      "A mapping from events to real numbers between 0 and 1",
      "A set containing all possible outcomes"
    ],
    wrong:{"1":"that is the frequentist reading of probability smuggled into the definition of the experiment itself. the course definition asks only for uncertainty about which outcome occurs, not repeatability, and Module 2 spends most of its length on cases such as a single measurement or a mathematical claim where no repetition exists.", "2":"that describes the probability function, which is defined on the event space, not the process that produces outcomes. if the experiment is the mapping, you are left with no name for the thing being modelled.", "3":"that is the sample space &Omega;. the experiment is the process; &Omega; is the set of things the process can produce, and Def. 1.2 gives it its own name for that reason."}, answer: [0],
    why: "Uncertainty about which outcome occurs is the defining feature. The fourth option describes the sample space, and the third describes a probability distribution.",
    src: "Notes Def. 1.1 (1-4) &middot; Lecture 1B, slide 3"
  },
  {
    type: "one",
    q: "An event that contains exactly one outcome is called what?",
    options: ["A trivial event", "A simple event", "A marginal event", "An atomic space"],
    wrong:{"0":"invented as a term for a one-outcome subset, and it collides with existing usage: the course already calls &Omega; the trivial event because it always occurs.", "2":"marginal describes summing a joint distribution down to fewer variables. it is an operation on distributions, not a statement about how many outcomes a subset contains.", "3":"invented. a subset holding one outcome is still an event, a subset of &Omega;, and calling it a space suggests it has its own outcomes to draw from."}, answer: [1],
    why: "An event is any subset of the sample space. When the subset holds just one outcome it is a simple event. Drawing one specific card from a deck is the course's example.",
    src: "Notes Def. 1.3 (1-4) &middot; Lecture 1B, slides 3-4"
  },
  {
    type: "fill",
    q: "A ______ space &Omega; is the set of all possible outcomes of an experiment.",
    answer: ["sample"],
    why: "&Omega; collects every outcome the experiment can produce. For one draw from a deck, &Omega; holds the faces of all 52 cards.",
    src: "Notes Def. 1.2 (1-4) &middot; Lecture 1B, slide 3"
  },
  {
    type: "one",
    q: "Which of these is NOT one of the three conditions a probability distribution P over &Omega; must satisfy?",
    options: [
      "P(&alpha;) &ge; 0 for all &alpha; &isin; &Omega;",
      "P(&Omega;) = 1",
      "If &alpha; &cap; &beta; = &empty; then P(&alpha; &cup; &beta;) = P(&alpha;) + P(&beta;)",
      "P(&alpha; | &beta;) = P(&alpha;) for all &alpha;, &beta; &isin; &Omega;"
    ],
    wrong:{0:"this <em>is</em> axiom 1, non-negativity. Picking it means you read the question as 'which is an axiom' rather than 'which is not'.", 1:"this <em>is</em> axiom 2, normalization. Same reversal.", 2:"this <em>is</em> axiom 3, additivity for disjoint events. If you chose one of the first three, reread the stem: it asks for the intruder."}, answer: [3],
    why: "The fourth is the definition of independence, and it certainly does not hold for every pair of events. The first three are the axioms.",
    src: "Notes Def. 1.6 (1-5) &middot; Lecture 1B, slide 5"
  },
  {
    type: "one",
    q: "The law of total probability states that the probability of an event equals which of the following?",
    options: [
      "P(A) = &sum;<sub>n</sub> P(A|B<sub>n</sub>) P(B<sub>n</sub>)",
      "P(A) = &sum;<sub>n</sub> P(A &cap; B<sub>n</sub>) / P(B<sub>n</sub>)",
      "P(A) = &prod;<sub>n</sub> P(A|B<sub>n</sub>)",
      "P(A) = 1 &minus; &sum;<sub>n</sub> P(B<sub>n</sub>|A)"
    ],
    wrong:{"1":"each term here is just P(A|B<sub>n</sub>) written out, so this adds conditional probabilities without weighting them by how likely each B<sub>n</sub> is. the sum is not even guaranteed to stay at or below 1.", "2":"multiplying conditionals is what the chain rule does to build a joint, not what marginalization does. across an exhaustive partition a product of probabilities collapses toward zero, which is the giveaway.", "3":"this reverses the conditioning: P(B<sub>n</sub>|A) is the posterior Bayes gives you. since the B<sub>n</sub> partition &Omega;, those posteriors sum to 1, so the expression always evaluates to 0 no matter what A is."}, answer: [0],
    why: "The sum of its probability across disjoint events, each weighted by that event's own probability. This is what lets you reach a marginal from a set of conditionals.",
    src: "Notes Def. 1.7 (1-6) &middot; Lecture 1B, slide 7"
  },
  {
    type: "one",
    q: "Mayweather was a &minus;210 favorite over Pacquiao, giving a win probability of 21/31 = 0.6774. Which interpretation of probability does this illustrate?",
    options: [
      "Frequentist, because betting markets aggregate many past fights",
      "Subjective, because it reflects the house's belief rather than a relative frequency",
      "Neither, because betting odds are not probabilities",
      "Both equally, since the two interpretations coincide for sporting events"
    ],
    wrong:{0:"betting markets do aggregate information, but the number is not a relative frequency of anything. The notes say so directly: it &ldquo;does not represent any relative frequency or ratio of victories.&rdquo;", 2:"they are probabilities under the subjective reading. Rejecting them entirely throws out the interpretation the whole course adopts.", 3:"if the two interpretations coincided there would be no Module 2. This specific fight happened once and cannot be repeated."}, answer: [1],
    why: "The notes are explicit: the number \"does not represent any relative frequency or ratio of victories. It is simply the houses belief that Mayweather Jr. would win.\" That specific fight happened exactly once.",
    src: "Notes Example 3 (1-4) &middot; Lecture 1A, slide 9"
  },
  {
    type: "one",
    q: "Using the chain rule, which expansion of P(A<sub>4</sub> &cap; A<sub>3</sub> &cap; A<sub>2</sub> &cap; A<sub>1</sub>) is correct?",
    options: [
      "P(A<sub>4</sub>) &middot; P(A<sub>3</sub>) &middot; P(A<sub>2</sub>) &middot; P(A<sub>1</sub>)",
      "P(A<sub>4</sub>|A<sub>3</sub>&cap;A<sub>2</sub>&cap;A<sub>1</sub>) &middot; P(A<sub>3</sub>|A<sub>2</sub>&cap;A<sub>1</sub>) &middot; P(A<sub>2</sub>|A<sub>1</sub>) &middot; P(A<sub>1</sub>)",
      "P(A<sub>4</sub>|A<sub>3</sub>) &middot; P(A<sub>3</sub>|A<sub>2</sub>) &middot; P(A<sub>2</sub>|A<sub>1</sub>) &middot; P(A<sub>1</sub>)",
      "P(A<sub>1</sub>|A<sub>2</sub>&cap;A<sub>3</sub>&cap;A<sub>4</sub>) &middot; P(A<sub>4</sub>&cap;A<sub>3</sub>&cap;A<sub>2</sub>)"
    ],
    wrong:{0:"that is the fully independent case. It assumes every event is independent of every other, which the chain rule never assumes. If this were valid you would not need conditional probability at all.", 2:"this conditions each factor only on the <em>immediately</em> preceding event, which is a Markov assumption you were not given. The chain rule conditions on <b>all</b> previous events. Making this substitution silently is how people build first-order models and then wonder why long-range dependence is missing.", 3:"the first factor is wrong. Conditioning A&#8321; on everything else is legal algebra but the remaining term is not expanded, so this is not a full chain-rule expansion."}, answer: [1],
    why: "Each factor conditions on <em>all</em> the events that follow it, not just the next one. Option 1 assumes full independence; option 3 assumes a Markov-style chain, which the rule does not.",
    src: "Notes Example 5, eq. 1.7-1.9 (1-7) &middot; Lecture 1B, slide 12"
  },
  {
    type: "one",
    q: "In the course definition, a random variable X is what kind of object?",
    options: [
      "A function assigning to each element of &Omega; one and only one real number",
      "A variable whose value is chosen uniformly at random from &Omega;",
      "A subset of the sample space with unknown probability",
      "A distribution over the events in &Omega;"
    ],
    wrong:{1:"this is the most common misreading, and it is what the bad name invites. A random variable is neither random nor a variable: it is a deterministic function. The randomness lives in &Omega;, not in X.", 2:"that describes an <em>event</em>, which is a subset of &Omega;. A random variable is a mapping from &Omega; to the reals.", 3:"that is a distribution. The random variable is the function; the distribution is what you get by pushing P through it."}, answer: [0],
    why: "A random variable is a function on the sample space, not a variable in the ordinary sense and not random by itself. In the craps example X(i,j) = i + j maps each of the 36 dice pairs to a sum.",
    src: "Notes &sect;1.4.2.4 (1-8) &middot; Lecture 1C, slides 3-4"
  },
  {
    type: "tf",
    q: "In the card example with E = {kh, ks, qh}, F = {kh, kc, qh} and G = {kh, ks, kc, kd}, the events E and F are not independent, but they are independent once you condition on G.",
    wrong:{"1":"the numbers in the example settle it: P(E) = 3/52 but P(E|F) = 2/3, so E and F are dependent, while P(E|G) = P(E &#8739; F &cap; G) = 1/2 makes them conditionally independent given G. treating independence and conditional independence as the same property is what leads people to drop edges a distribution actually requires."}, answer: [0],
    why: "True. P(E|F) = 2/3 while P(E) = 3/52, so E and F are dependent. But P(E|G) = 1/2 and P(E|F &cap; G) = 1/2, so conditioning on G makes them independent. Conditional independence neither implies nor is implied by independence.",
    src: "Notes Example 11 (1-10) &middot; Lecture 1C, slide 10"
  },
  {
    type: "many",
    q: "Which of the following are true of independence as defined in this course?",
    options: [
      "Independence is symmetric: if A is independent of B, then B is independent of A",
      "Draws with replacement are independent",
      "P satisfies (E &perp; F) if and only if P(E &cap; F) = P(E)P(F)",
      "Two mutually exclusive events with nonzero probability are independent"
    ],
    wrong:{3:"mutually exclusive events are the <em>opposite</em> of independent. If A and B cannot co-occur, learning A occurred tells you B definitely did not, which is maximal dependence. Confusing disjoint with independent will wreck any joint probability you compute."}, answer: [0, 1, 2],
    why: "The first three are stated directly in the notes. The fourth is false and worth remembering: if A and B are mutually exclusive, learning that A occurred tells you B did not, which is maximal dependence rather than independence.",
    src: "Notes Def. 1.14 and Prop. 1.15 (1-10) &middot; Lecture 1C, slide 8"
  },
  { type:"many",
    q:"Probability theory requires the event space S to satisfy which basic properties?",
    options:["It contains the empty event &empty; and the trivial event &Omega;","It is closed under union","It is closed under complementation","Every event in it has nonzero probability"],
    wrong:{"3":"that is the definition of a <em>positive</em> distribution, a property of P, not a structural requirement on the event space S. it is also impossible here, since S must contain &empty; and P(&empty;) = 0 by construction."}, answer:[0,1,2],
    why:"Closure under union and complement drags intersection and set difference along for free. The fourth option describes a <em>positive</em> distribution, which is a separate and much stronger condition.",
    src:"Koller &sect;2.1.1.1, book p. 16" },
  { type:"one",
    q:"A distribution P is called <em>positive</em> when what is true?",
    options:["P(&alpha;) &gt; 0 for every non-empty event &alpha;","P(&alpha;) &ge; 0 for every event","P(&Omega;) = 1","P(&alpha; &cap; &beta;) = P(&alpha;)P(&beta;) for all &alpha;, &beta;"],
    wrong:{"1":"that is the nonnegativity axiom, which every distribution satisfies, so it separates nothing. positivity is the strict inequality, and only on non-empty events.", "2":"that is normalization, again true of every distribution by axiom. reading it as positivity means you would call every distribution positive and lose the distinction entirely.", "3":"that is universal independence of all pairs, a far stronger and far rarer condition with no connection to positivity. positivity is what licenses the intersection property, which is a result about variables that are <em>not</em> independent."}, answer:[0],
    why:"Nothing possible gets probability exactly zero. Option 2 is just axiom 1 and holds for every distribution. Positivity buys extra properties, notably intersection, which fails in general.",
    src:"Koller Def. 2.5, book p. 25" },
  { type:"tf",
    q:"&#120124;[X + Y] = &#120124;[X] + &#120124;[Y] holds even when X and Y are not independent.",
    wrong:{"1":"linearity of expectation holds for any X and Y whatsoever. independence is needed for results about products, &#120124;[XY] = &#120124;[X]&#120124;[Y], and for the variance of a sum, not for the mean of a sum. denying it sends you hunting for independence assumptions you never needed."}, answer:[0],
    why:"True, and Koller stresses it. Linearity of expectation is unconditional, which is why expected-value arguments crack problems that look hopelessly correlated.",
    src:"Koller Prop. 2.4, book p. 32" },
  { type:"tf",
    q:"Var[X + Y] = Var[X] + Var[Y] holds for any two random variables.",
    wrong:{0:"believing this is a real hazard. It needs independence, unlike linearity of expectation. When variables share a hidden common cause, the covariance term you dropped is exactly the risk you failed to account for, and your interval comes out too narrow."}, answer:[1],
    why:"False. Variance adds only under <em>independence</em>. Compare with linearity of expectation, which needs no assumption. Assuming variances add when a hidden common cause exists is how confidence intervals come out too narrow.",
    src:"Koller Prop. 2.6, book p. 33" },
  { type:"one",
    q:"Chebyshev's inequality, P(|X &minus; &#120124;[X]| &ge; t) &le; Var[X]/t&sup2;, requires which assumption?",
    options:["Only a finite variance","That X is Gaussian","That X is non-negative","That X and its mean are independent"],
    wrong:{1:"no distributional assumption is needed, and that is the entire appeal. Assuming Gaussian would let you compute an exact probability rather than a bound, but you would have to justify the assumption.", 2:"non-negativity is what <b>Markov's</b> inequality needs. Chebyshev is in fact derived from Markov applied to the squared deviation.", 3:"X is never independent of its own mean; the mean is a number, not a random variable."}, answer:[0],
    why:"That is the appeal: no distributional shape is assumed. In exchange it gives a loose upper bound rather than an answer. Non-negativity is what Markov's inequality needs instead.",
    src:"Koller Thm. 2.1, book p. 33" },
  { type:"one",
    q:"What is a topological ordering of a graph's nodes?",
    options:[
      "An ordering where X<sub>i</sub>&rarr;X<sub>j</sub> implies i comes before j",
      "An ordering by number of parents",
      "An ordering where every node precedes its ancestors",
      "Any ordering of the nodes in a connected graph"],
    wrong:{"1":"the number of parents says nothing about reachability; a node with many parents can still legitimately come first. this ordering would not guarantee that prerequisites precede dependents, which is the only property that makes a topological order useful for factorizing a joint.", "2":"exactly backwards. ancestors are the prerequisites and must come first; if every node preceded its ancestors, every arrow would point backwards in the list.", "3":"connectivity is irrelevant, and the constraint is on edge direction, not on which nodes are reachable from which. topological orderings exist for acyclic graphs whether or not they are connected, and fail for cyclic ones however connected they are."}, answer:[0],
    why:"Every arrow points forward in the list, like a recipe where prerequisites always appear first. It exists only for acyclic graphs and is usually not unique.",
    src:"Koller Def. 2.19, book p. 36" },
  { type:"one",
    q:"What is the difference between a path and a trail?",
    options:[
      "A path never travels against an arrow; a trail ignores arrow direction",
      "A path may repeat nodes; a trail may not",
      "A path is undirected; a trail is directed",
      "There is no difference; the terms are interchangeable"],
    wrong:{1:"repetition of nodes is not what separates them; direction is. Both may revisit nodes.", 2:"backwards. Both can exist in a directed graph; a path respects arrows and a trail ignores them.", 3:"they are genuinely different, and the difference is load-bearing. Influence in a Bayesian network flows along <b>trails</b>, so treating them as synonyms breaks d-separation."}, answer:[0],
    why:"Driving with the one-way signs versus walking and ignoring them. Every path is therefore also a trail, but not the reverse. This distinction is what makes d-separation work, since influence flows along trails.",
    src:"Koller Def. 2.15 and 2.16, book p. 36" },
  { type:"one",
    q:"What is the difference between a cycle and a loop?",
    options:[
      "A cycle is a directed path returning to its start; a loop is a trail returning to its start",
      "A cycle has length 3 or more; a loop has length 2",
      "A cycle occurs in undirected graphs, a loop in directed graphs",
      "A loop must contain a chord; a cycle need not"],
    wrong:{1:"length is irrelevant to the distinction. Both are about whether you may walk against arrows.", 2:"both terms apply to directed graphs. The cycle uses a directed path, the loop uses a trail.", 3:"chords belong to the definition of chordal graphs, not to loops as such."}, answer:[0],
    why:"Loop is to trail as cycle is to path. A graph can be perfectly acyclic and still be full of loops, which is exactly why singly connected graphs are the easy case for inference.",
    src:"Koller Def. 2.20 and 2.22, book pp. 37-38" },
  { type:"one",
    q:"A clique X is called <em>maximal</em> when what is true?",
    options:[
      "No superset of X is also a clique",
      "X is the largest clique in the graph",
      "X contains every node in the graph",
      "X has no chords"],
    wrong:{1:"that is <b>maximum</b>, not maximal. Maximal means locally un-extendable: you cannot add a node to <em>this</em> clique. A three-node maximal clique can coexist with a five-node clique elsewhere. Inference cost depends on the largest clique, so conflating these two will make you underestimate it.", 2:"that would be a complete graph, a much stronger condition.", 3:"chords are about loops in chordal graphs, not about cliques."}, answer:[0],
    why:"Maximal is local: you cannot extend this one. Maximum is global. A three-node maximal clique can sit in a graph that also has a five-node clique elsewhere.",
    src:"Koller Def. 2.13, book p. 35" },
  { type:"one",
    q:"An undirected graph is <em>chordal</em> when what holds?",
    options:[
      "Every loop of length 4 or more has a chord joining two nonconsecutive nodes",
      "Every pair of nodes is connected by an edge",
      "It contains no loops at all",
      "Every node has at most one parent"],
    wrong:{"1":"that is a complete graph, where every pair is adjacent. complete graphs are chordal, but chordality is far weaker, and most chordal graphs have plenty of missing edges.", "2":"that is a forest. trees are chordal, but chordality permits loops freely as long as each long loop carries a chord, so this reads a permissive condition as a prohibition.", "3":"parents are a directed notion and this definition is about undirected graphs. at most one parent describes a directed tree, which is a different structure from a chordal graph."}, answer:[0],
    why:"Four people in a square each knowing only their neighbours is the forbidden pattern. Loops of length 3 are automatically fine, since there are no nonconsecutive nodes to join. Chordal graphs are exactly the ones where exact inference is tractable.",
    src:"Koller Def. 2.24, book p. 38" },
  { type:"one",
    q:"Bowl C&#8321; holds 3 red and 7 blue chips; bowl C&#8322; holds 8 red and 2 blue. A die selects C&#8321; on a 5 or 6, otherwise C&#8322;. A red chip is drawn. What is P(C&#8321; | red)?",
    options:["3/19","1/3","3/10","19/30"],
    wrong:{"1":"that is the prior P(C&#8321;) unchanged, which amounts to treating the red draw as carrying no information. red is more likely under C&#8322;, so the posterior has to move below 1/3, not stay at it.", "2":"that is the likelihood P(red|C&#8321;), the conditioning read in the wrong direction. swapping P(A|B) for P(B|A) is the base-rate error that Bayes' rule exists to prevent.", "3":"that is P(red), the denominator, computed correctly and then handed in as the answer. it is the right intermediate quantity, but the joint P(C&#8321;, red) = 3/30 still has to be divided by it."}, answer:[0],
    why:"Priors are 1/3 and 2/3. P(red) = (3/10)(1/3) + (8/10)(2/3) = 19/30. Then P(C&#8321;|red) = (3/30)/(19/30) = 3/19 &asymp; 0.158. Note it dropped below the prior of 1/3, which is right: C&#8322; is the red-heavy bowl, so red is evidence <em>against</em> C&#8321;.",
    src:"Lecture 1B, slide 14 &middot; Notes Def. 1.11 (1-7)" },
  { type:"one",
    q:"P(GradeA | Smart) = 0.6, P(Smart) = 0.3, P(GradeA) = 0.2. What is P(Smart | GradeA)?",
    options:["0.9","0.45","0.6","0.18"],
    wrong:{"1":"that is what you get with P(GradeA) = 0.4 instead of 0.2, so it doubles the denominator. the sensitivity is the lesson: the same likelihood and prior give very different posteriors depending on how surprising the evidence is.", "2":"that is the likelihood P(GradeA|Smart) read straight back out. reversing the conditioning ignores both the prior and the evidence's own probability, which is the entire content of Bayes' rule.", "3":"that is the joint P(Smart, GradeA) = 0.6 &times; 0.3, stopping one step early. a joint is not a conditional; skipping the division by P(GradeA) is the same omission as dropping the normalizing denominator."}, answer:[0],
    why:"(0.6 &times; 0.3) / 0.2 = 0.9. If the test were easier so that P(GradeA) = 0.4, the same evidence would only give 0.45. Evidence is informative in proportion to how surprising it is.",
    src:"Lecture 1B, slides 16-17 &middot; Koller Example 2.1, book p. 19" },
  { type:"one",
    q:"From a joint table, P(&not;B, F, &not;Y) = 0.01 and P(B, F, &not;Y) = 0.2. What is P(&not;Bird | Flier, &not;Young)?",
    options:["0.048","0.01","0.21","0.2"],
    wrong:{"1":"that is the joint P(&not;B, F, &not;Y) handed in as a conditional. without dividing by P(F, &not;Y) you are answering how likely all three are together, not how likely &not;Bird is given the other two.", "2":"that is the denominator P(F, &not;Y) = 0.21, obtained by correctly marginalizing over Bird. right intermediate, wrong final step.", "3":"that is the other joint entry, P(B, F, &not;Y), which describes the complementary case. it is the larger of the two, so reporting it inverts the answer as well as skipping the normalization."}, answer:[0],
    why:"The denominator must be built by marginalizing over Bird: P(F, &not;Y) = 0.01 + 0.2 = 0.21. Then 0.01/0.21 &asymp; 0.048. Forgetting to sum out the missing variable is the standard error here.",
    src:"Lecture 1C, slide 12 &middot; Notes &sect;1.5 (1-11)" },
  { type:"tf",
    q:"Conditional probability satisfies the axioms of probability, and is therefore itself a probability distribution.",
    wrong:{"1":"P(&middot;|B) satisfies all three axioms: it is nonnegative, P(B|B) = 1 gives normalization, and additivity survives on disjoint events. denying this leaves you with no justification for conditioning a second time or for applying any theorem inside a conditional."}, answer:[0],
    why:"True, and it is why all the machinery keeps working once you condition. Both your notes and Koller state it, and both leave the proof to you as an exercise.",
    src:"Notes Def. 1.9 (1-6) &middot; Lecture 1B, slide 9 &middot; Koller Exercise 2.4, book p. 39" },
  { type:"tf",
    q:"For a continuous random variable X, P(X = x) = 0 for every single value x.",
    wrong:{"1":"for a continuous variable probability comes from integrating a density over an interval, and the integral over a single point is zero. reading the density p(x) as a probability is what makes people treat a value above 1 as a bug, when a uniform on [0, 0.5] legitimately has density 2."}, answer:[0],
    why:"True. Only intervals carry probability, which is also why a density p(x) is not a probability and may exceed 1. On the interval [0, 0.5] a uniform density equals 2.",
    src:"Notes Def. 1.13 (1-8) &middot; Koller Def. 2.6, book p. 28" }
  ]
},
{
  name: "Module 2 - Interpretations and the 'Inevitability' of Probability",
  questions: [
  {
    type: "one",
    q: "The Nixon example, where someone is both a Quaker and a Republican and the conclusions cancel, is used to show a failure of which scheme?",
    options: ["Fuzzy logic", "Non-monotonic logic", "Confirmation theory", "Dempster-Shafer theory"],
    wrong:{"0":"fuzzy logic grades truth between 0 and 1, and the Nixon case has nothing partial about it: both memberships are fully true. fuzzy logic's own weakness is that nobody can say what a 0.7 means, not that it deadlocks.", "2":"confirmation theory is about when evidence counts as confirming a hypothesis, via a threshold. it has no notion of default rules that fire and are later retracted, which is what the Nixon example is testing.", "3":"Dempster-Shafer assigns mass to subsets in order to represent ignorance, so a conflict like this would show up as a numerical split rather than as a deadlock with no way to proceed."}, answer: [1],
    why: "Non-monotonic logic covers frameworks for defeasible inference, where conclusions may be retracted given further information. With both assertions true the conclusion is invalidated, and the framework has no way to weigh one against the other.",
    src: "Notes Def. 2.1 and Example 1 (2-2) &middot; Lecture 2A, slide 4"
  },
  {
    type: "one",
    q: "Under the default rule \"birds typically fly,\" why can Flies(Condor) be concluded while Flies(Penguin) cannot?",
    options: [
      "Condor appears in the knowledge base and Penguin does not",
      "The justification Flies(Penguin) is inconsistent with what is already known",
      "Penguin fails the precondition Bird(Penguin)",
      "Default logic only licenses conclusions about individuals, not species"
    ],
    wrong:{"0":"both appear as birds in the knowledge base. if presence in the KB were the criterion, a default rule could never be defeated by anything learned later, which is precisely the ability defaults exist to provide.", "2":"Bird(Penguin) is true, so the precondition is satisfied and is not what blocks the rule. locating the blockage there hides where default logic actually does its work, in the consistency check on the justification.", "3":"invented restriction. default rules are stated with variables and apply to any individual instance; nothing in the framework distinguishes species from individuals."}, answer: [1],
    why: "Bird(Penguin) satisfies the precondition, so that is not the obstacle. The rule fires only when the justification stays consistent with current knowledge, and knowing penguins do not fly blocks it.",
    src: "Notes Example 2 (2-3) &middot; Lecture 2A, slide 5"
  },
  {
    type: "one",
    q: "In Dempster-Shafer theory, a probability mass function is assigned to what?",
    options: [
      "Each subset of the domain &Omega;",
      "Each element of the domain &Omega;",
      "Each rule in the production system",
      "Each pair of belief and utility values"
    ],
    wrong:{"1":"assigning mass to individual elements is ordinary probability. restricting to singletons removes exactly the expressive gap Dempster-Shafer was built for, representing ignorance about <em>which</em> element, and collapses belief and plausibility back into one number.", "2":"that describes certainty factors in a rule-based expert system, a different alternative on the same list of non-probabilistic schemes.", "3":"belief and plausibility are the pair Dempster-Shafer produces, and utility belongs to decision theory. Cheeseman lists the mixing of probability with utility as one of the conceptual confusions to avoid."}, answer: [0],
    why: "Assigning mass to subsets rather than elements is what lets the theory represent incomplete knowledge, and it is why every statement carries two numbers, belief and plausibility, instead of one.",
    src: "Lecture 2A, slide 8 &middot; Notes &sect;2.2.4 (2-7)"
  },
  {
    type: "one",
    q: "How does fuzzy logic differ from Boolean logic?",
    options: [
      "Truth values may be any real number in [0, 1] rather than only 0 or 1",
      "It assigns probabilities to propositions instead of truth values",
      "It permits conclusions to be retracted when new evidence arrives",
      "It requires a threshold before a hypothesis counts as confirmed"
    ],
    answer: [0],
    why: "Fuzzy logic is many-valued logic handling partial truth. Option 3 describes non-monotonic logic and option 4 describes confirmation theory, both of which appear on the same list of alternatives.",
    src: "Notes Def. 2.5 (2-4) &middot; Lecture 2A, slide 10"
  },
  {
    type: "one",
    q: "For the rule (s<sub>1</sub>, s<sub>2</sub>, s<sub>3</sub>) &rarr; h with value 0.7, why is 0.7 not a probability?",
    options: [
      "Because it was elicited from an expert rather than measured from data",
      "Because you cannot conclude that P(~h | s<sub>1</sub>, s<sub>2</sub>, s<sub>3</sub>) = 0.3",
      "Because three pieces of evidence are not enough to support a probability",
      "Because probabilities must be stated to more decimal places"
    ],
    wrong:{"0":"where a number came from does not decide whether it is a probability; subjective probabilities elicited from experts are still probabilities under the interpretations Module 2 defends. the objection here is structural, about the complement rule, not about provenance.", "2":"probabilities carry no minimum evidence count. this reframes a semantic failure, that the number does not obey the axioms, as a sample-size complaint, which would wrongly suggest that gathering more evidence fixes it.", "3":"precision is irrelevant. 0.7000 would fail for the same reason, because the problem is that 1 &minus; 0.7 does not mean anything in this scheme, not that the value is coarse."}, answer: [1],
    why: "The three observations count as evidence <em>for</em> the conclusion only, and say nothing against it. Under such schemes evidence for and against must be gathered and evaluated separately, which breaks the complement rule that a genuine probability obeys.",
    src: "Notes Example 6 (2-7) &middot; Lecture 2B, slide 7"
  },
  {
    type: "tf",
    q: "In probabilistic reasoning, contradictions between pieces of evidence do not occur.",
    wrong:{"1":"the notes say the opposite: because all evidence is combined into a single probability value, no piece ever has to be thrown out, though evidence can drive a hypothesis's probability down. expecting contradictions is how people import conflict-resolution machinery from rule-based systems into a framework that does not need it."}, answer: [0],
    why: "True. All evidence is combined into a final probability value, so there is never a need to reject a piece of evidence, though evidence can be used to reject hypotheses. Reasoning that looks logical, like \"if there is smoke, there is fire,\" shows its non-logical nature exactly when contradictory evidence appears.",
    src: "Notes &sect;2.2.5 (2-8) &middot; Lecture 2C, slide 4"
  },
  {
    type: "one",
    q: "The example of locating a ship somewhere in the North Atlantic is used to make which point?",
    options: [
      "Assigning equal probability along one dimension forces unequal assignments along another",
      "Prior probabilities should be avoided whenever information is scarce",
      "Maximum entropy always yields a uniform distribution",
      "Search problems require frequency data rather than subjective priors"
    ],
    wrong:{"1":"the opposite of the lesson. Cheeseman's argument is that refusing to state a prior does not remove it, it just hides it, and that omitting priors produces erroneous conclusions when there are many possibilities.", "2":"maximum entropy returns a uniform distribution only when the constraints are symmetric under the parameterization you chose. the ship is the counterexample: uniform over area and uniform over latitude are both defensible and incompatible.", "3":"the example says nothing about frequencies. its point is that even a subjective uniform assumption depends on which coordinates you decided to call equivalent."}, answer: [0],
    why: "Uniform over equal areas and uniform over latitude are different distributions, and you cannot hold both. The conclusion is that rich domain knowledge usually produces non-uniform priors, not that priors should be dropped.",
    src: "Notes &sect;2.2.3 item 3, Figure 2.2 (2-6) &middot; Lecture 2B, slide 4"
  },
  {
    type: "fill",
    q: "Cox frames probability as having involved two ideas: reasonable expectation, and frequency in an ______.",
    answer: ["ensemble"],
    why: "The ensemble may be indefinitely many identical boxes, or indefinitely many drawings from one box with replacement. The assumption it requires is that the initial circumstances are capable of indefinite repetition.",
    src: "Notes &sect;2.3 (2-8) and &sect;2.3.2 (2-9) &middot; Lecture 2D, slides 2-3"
  },
  {
    type: "tf",
    q: "Cox concludes that every measure of reasonable expectation is also a frequency in some ensemble, making the choice between the two interpretations moot.",
    wrong:{0:"this is the claim Cox <em>tests and rejects</em>. If it held, the choice between interpretations would be moot and there would be nothing to argue about. His counterexample is that frequency does not even connect statistical mechanics to thermodynamics."}, answer: [1],
    why: "False. Cox writes that \"there is a field of probable inference which lies outside the range of that theory,\" so frequency rules cannot be justified there. Cases where an ensemble can genuinely be constructed are rare, and the frequency definition does not even suffice to connect statistical mechanics to thermodynamics.",
    src: "Notes &sect;2.3.1 (2-9) and &sect;2.3.3 (2-11) &middot; Lecture 2D, slides 5 and 11"
  },
  {
    type: "many",
    q: "Which of the following does Cheeseman list among the conceptual confusions about probability?",
    options: [
      "Relative versus absolute probabilities",
      "Separation of probability and utility",
      "Probability versus uncertainty about the probability",
      "Confusion between conditional and joint distributions"
    ],
    wrong:{"3":"a genuine and common error, but a computational slip rather than one of the conceptual objections Cheeseman catalogues. adding it to the list blurs his point, which is about arguments raised <em>against</em> probability, not mistakes made while applying it."}, answer: [0, 1, 2],
    why: "The listed confusions are relative versus absolute probabilities, separation of probability and utility, probabilities as a measure of belief in a proposition, and probability versus uncertainty about the probability. The fourth option is a genuine source of error but is not on that list.",
    src: "Notes &sect;2.2.4 (2-7) &middot; Lecture 2C, slide 3"
  },
  { type:"one",
    q:"According to Koller's historical notes, why did the AI community turn away from probabilistic methods?",
    options:[
      "A belief that people do not manipulate numbers when reasoning, plus the rigid independence assumptions in early expert systems",
      "Probability was proved mathematically inconsistent",
      "Computers of the era could not perform floating-point arithmetic",
      "Bayes' rule had not yet been discovered"],
    wrong:{"1":"no such proof exists, and Cox's theorem runs the other way, deriving the probability axioms from consistency requirements on degrees of belief.", "2":"hardware was never the stated objection. blaming arithmetic hides the real diagnosis Koller gives, that the field lacked a flexible way to represent interactions between variables, which is the gap graphical models fill.", "3":"Bayes' rule dates from the eighteenth century and was in wide use long before AI existed."}, answer:[0],
    why:"Koller adds that the missing piece was \"a flexible, scalable mechanism to represent interactions between variables.\" The rejection was a real limitation misdiagnosed as a fatal one, and graphical models are the fix.",
    src:"Koller &sect;1.4 Historical Notes, book p. 13" },
  { type:"one",
    q:"Koller describes an attempt to rescue the frequentist reading of one-off events by finding a <em>reference class</em>. What is his verdict on it?",
    options:[
      "None of the attempts has proved entirely satisfactory",
      "It fully resolves the problem",
      "It works for weather but not for medicine",
      "It requires a Gaussian assumption"],
    wrong:{"1":"Koller's verdict is the opposite: no proposal has proved entirely satisfactory, because the reference class you pick changes the number you get.", "2":"the difficulty is not domain-specific. the same question, similar to what exactly, arises for weather and medicine alike.", "3":"invented. nothing about choosing a reference class involves normality; the problem is which population to count, not what shape it has."}, answer:[0],
    why:"Similar to what, exactly? Afternoons in this city, in March, after a dry January? Each answer gives a different number. This is Cox's \"field of probable inference outside the range of that theory,\" compressed into two paragraphs.",
    src:"Koller &sect;2.1.1.3, book p. 17" },
  { type:"tf",
    q:"Cox notes that the frequency definition of probability is not even sufficient to establish the connection between statistical mechanics and thermodynamics.",
    wrong:{"1":"Cox's claim is precisely that frequency is not sufficient there, and the notes flag it as striking because statistical mechanics is the friendliest imaginable ground for a frequency reading. if frequency held even there, Module 2's case for a broader interpretation would lose its strongest example."}, answer:[0],
    why:"True, and your notes call it striking. Frequency fails inside physics, the very place you would most expect it to hold.",
    src:"Notes &sect;2.3.1 (2-9) &middot; Lecture 2D" },
  { type:"tf",
    q:"Under Cheeseman's view, two ideal believers given exactly the same information may still legitimately assign different probabilities.",
    wrong:{0:"choosing True drops Corollary 2.7(c), and dropping it inverts Cheeseman's position into 'anything goes'. His defence of subjective probability depends on the claim that identical information forces identical belief."}, answer:[1],
    why:"False, and this is the clause students drop. Probabilities are subjective in that the value depends on the believer's information, but <em>objective</em> in that the same ideal believers with the same information should arrive at the same value. That is what stops subjectivism from becoming 'anything goes.'",
    src:"Notes Cor. 2.7(c) (2-5) &middot; Lecture 2B" },
  { type:"one",
    q:"In Cox's graded series of four examples, which one is the case where the frequency interpretation becomes impossible rather than merely difficult?",
    options:[
      "Whether a large number can be written as a sum of cubes",
      "The score in a number of coin tosses",
      "The value of the Joule equivalent",
      "The reciprocal fine-structure constant"],
    wrong:{"1":"this is the easiest case in the series and the one frequency handles best, since the tosses form an obvious repeatable ensemble.", "2":"difficult but rescuable: you imagine an ensemble of measurements of which yours is a random sample. the constant does not vary, but your error does, so a frequency reading survives.", "3":"the same shape as the Joule case, a fixed constant observed with measurement error, so an ensemble of measurements is still available. the series is graded so that this one is hard but not impossible."}, answer:[0],
    why:"The claim is simply true or false; mathematics does not roll dice. There is no ensemble, not even a hypothetical one, and no measurement error to hide behind. The series is graded precisely so that no single step is the obvious break.",
    src:"Notes &sect;2.3.2.1 (2-10) &middot; Lecture 2D, slides 6-10" },
  { type:"one",
    q:"In Cox's Joule-equivalent example, what exactly forms the ensemble?",
    options:[
      "An imagined ensemble of measurements, of which yours is a random sample",
      "An ensemble of different possible values of the constant",
      "An ensemble of universes with different physical laws",
      "There is no ensemble; the case is purely subjective"],
    wrong:{"1":"the constant has one value, so nothing about it varies. putting the ensemble on the constant misplaces the uncertainty, which lives in the measurement rather than in nature.", "2":"invented, and far stronger than anything Cox's argument requires. he needs only repeated measurements of one quantity, not varying physics.", "3":"this is the case where an ensemble can be constructed, which is why it sits in the middle of the graded series. the case with no ensemble at all is the mathematical proposition further along."}, answer:[0],
    why:"The constant does not vary; only your measurement error does. Frequency is rescued by shifting what is being counted, and it works provided there are no systematic errors. Note you are now counting a hypothetical population you invented rather than one you observed.",
    src:"Notes Example 9 (2-10) &middot; Lecture 2D, slide 8" },
  { type:"one",
    q:"Cheeseman's point-mass analogy from mechanics is aimed at which claim?",
    options:[
      "That more than one number is needed to represent uncertainty",
      "That probability is a frequency ratio",
      "That priors assume more information than is given",
      "That numbers are not necessary at all"],
    wrong:{1:"that is misconception 1, answered by redefining probability as a measure of belief, not by an analogy from mechanics.", 2:"that is the North Atlantic ship argument.", 3:"that is the 'numbers are not necessary' objection, answered by noting that the most probable option can still be wildly unlikely."}, answer:[0],
    why:"A complex body can be replaced by a point mass at its centre of gravity and give identical results. How many numbers you need depends on the question, so if no further evidence is coming, one number suffices. The target is Dempster-Shafer, which always makes you carry belief and plausibility.",
    src:"Notes &sect;2.2.3 item 5 (2-7) &middot; Lecture 2B, slide 6" },
  { type:"one",
    q:"What does the maximum entropy principle state?",
    options:[
      "Choose the distribution with the highest entropy among those satisfying your constraints",
      "Choose the distribution that maximizes the likelihood of the data",
      "Always choose a uniform distribution when uncertain",
      "Maximize the information gained from each observation"],
    wrong:{"1":"that is maximum likelihood, which fits parameters to observed data. maximum entropy operates on constraints and can be applied before any data exists, which is why it is presented as a way of assigning <em>priors</em>.", "2":"uniform is the maximum-entropy answer only when normalization is the sole constraint. add a known mean, or change the parameterization as the ship example does, and the answer stops being uniform.", "3":"that describes an experimental design or active learning criterion, about which observation to go and make. maximum entropy is about the distribution you state given what you already know."}, answer:[0],
    why:"Say as little as the constraints allow. Your notes place conditional independence inside this family, which reframes it: assuming conditional independence is picking the least committal option consistent with what you know, not asserting a fact about the world.",
    src:"Notes Def. 2.8 (2-5) &middot; Lecture 2B, slide 4" },
  { type:"one",
    q:"In the certainty-factors example, Watson's call carries CF 0.5 and Mrs Gibbons' carries 0.9. Certainty factors are presented as an alternative to Bayesian reasoning under what conditions?",
    options:[
      "When reliable statistical information is unavailable or independence of evidence cannot be assumed",
      "When the sample space is infinite",
      "When all evidence is known to be independent",
      "When priors are uniform"],
    wrong:{"1":"sample-space size is not the motivation. probability handles infinite spaces perfectly well, and nothing in the certainty-factor literature is about cardinality.", "2":"backwards. independence of evidence is the assumption certainty factors are offered as a way around, so assuming it removes the reason to use them.", "3":"priors are not the stated problem. the motivation given is missing statistics and unwarranted independence assumptions, and uniform priors would not help with either."}, answer:[0],
    why:"That is the stated motivation, and it is a real problem. The objection is not the motivation but the semantics: nobody can say what a 0.5 <em>is</em>, so nobody can check whether the combining rule is correct.",
    src:"Notes Def. 2.2 (2-3) &middot; Lecture 2A, slides 6-7" },
  { type:"one",
    q:"What does confirmation theory require before a hypothesis counts as confirmed?",
    options:[
      "That the evidence for it passes a certain threshold",
      "That its probability exceeds 0.5",
      "That no contradictory evidence exists",
      "That the prior be uniform"],
    wrong:{"1":"that is a fixed decision rule, not confirmation. confirmation is comparative, P(H|E) exceeding P(H), so a hypothesis rising from 0.05 to 0.2 is confirmed while remaining improbable.", "2":"nothing in confirmation theory demands the absence of contrary evidence; that requirement would make almost nothing confirmable in practice.", "3":"invented. confirmation compares posterior to prior whatever the prior happens to be, and the prior's shape is not part of the criterion."}, answer:[0],
    why:"E confirms H if P(H|E) exceeds P(H), with a cutoff deciding when that counts. The cost is that it discards the magnitude, and the threshold is arbitrary.",
    src:"Notes Def. 2.4 (2-4) &middot; Lecture 2A, slide 9" },
  { type:"one",
    q:"What does non-monotonic logic exist to capture?",
    options:[
      "Defeasible inference, where a reasoner reserves the right to retract conclusions given further information",
      "Truth values between 0 and 1",
      "Belief assigned to subsets rather than elements",
      "Thresholds for confirming a hypothesis"],
    wrong:{"1":"that is fuzzy logic, which grades truth rather than retracting conclusions.", "2":"that is Dempster-Shafer, whose mass function is defined on subsets of &Omega; so that ignorance can be represented.", "3":"that is confirmation theory. all four schemes appear on the same list of alternatives to probability, and swapping their definitions is the quickest way to lose the point that each fails in a different way."}, answer:[0],
    why:"Ordinary logic is a ratchet: once proved, proved forever. Real reasoning must be able to take a conclusion back. Its failure mode is deadlock rather than error, which the Nixon diamond demonstrates.",
    src:"Notes Def. 2.1 (2-2) &middot; Lecture 2A, slide 4" },
  { type:"one",
    q:"Koller says the frequentist interpretation \"gives probabilities a tangible semantics.\" For which kind of system?",
    options:[
      "Concrete physical systems such as dice, coin flips and card games",
      "One-off events such as tomorrow's weather",
      "Mathematical propositions",
      "Any system with a finite sample space"],
    wrong:{"1":"that is the class Koller says frequency struggles with; tomorrow's weather happens once, and this is exactly where the reference-class problem bites.", "2":"that is where Cox's series ends, with frequency not merely strained but impossible, since a mathematical claim has no ensemble at all.", "3":"finiteness is not the criterion. a finite sample space can still describe a single non-repeatable event, and repeatability rather than size is what makes the semantics tangible."}, answer:[0],
    why:"That qualifier is doing quiet work. For concrete repeatable systems you can envision how the frequencies are defined and check that they satisfy the axioms. Step outside that class and the semantics stop being tangible, which is the crack Module 2 lives in.",
    src:"Koller &sect;2.1.1.3, book pp. 16-17" },
  { type:"one",
    q:"Cheeseman argues that a theory of uncertainty without numbers has what specific limitation?",
    options:[
      "It can say which option is most probable, but not that the most probable option is itself highly unlikely",
      "It cannot rank options at all",
      "It cannot represent evidence",
      "It requires infinite computation"],
    wrong:{"1":"ranking is exactly what a non-numeric theory <em>can</em> do. the limitation is about the absolute level, not the ordering, and Cheeseman concedes the ranking case where the alternatives are fixed and no more evidence is coming.", "2":"such theories represent evidence routinely; that is what they were built to do. what they cannot express is the magnitude of the resulting belief.", "3":"a computational claim, and not the one being made. non-numeric schemes were often adopted <em>because</em> they were cheaper, so cost cannot be the objection."}, answer:[0],
    why:"\"Most likely\" and \"likely\" are different claims, and a ranking cannot tell them apart. He does concede a case: if you must choose among fixed alternatives and no more evidence is available, ranking is enough.",
    src:"Notes &sect;2.2.3 item 4 (2-6) &middot; Lecture 2B, slide 5" },
  { type:"many",
    q:"Which of these are described as ways of assigning prior probabilities?",
    options:["Maximum entropy","The principle of indifference","Experimentation","Rejecting priors entirely as unscientific"],
    wrong:{"3":"that is the position Cheeseman argues against, not a method of assigning priors. declining to state a prior does not remove it, it leaves it implicit and unexaminable, and the notes say that failing to use priors produces erroneous conclusions especially when many possibilities are in play."}, answer:[0,1,2],
    why:"Your notes list all three in &sect;2.2.6. The fourth is the position Cheeseman argues against: refusing to state a prior does not remove it, it hides it, and failure to use priors leads to erroneous conclusions especially when there are many possibilities.",
    src:"Notes &sect;2.2.6 (2-8) and &sect;2.2.4 item 6 (2-8)" },
  { type:"tf",
    q:"Your lecture notes state that in probability, contradictory evidence must be rejected before the remaining evidence can be combined.",
    wrong:{"0":"the notes say the reverse: in probability contradictions do not occur, all evidence is combined, and no evidence needs rejecting, though evidence can be used to reject hypotheses. accepting the claim imports the conflict-resolution step from rule-based systems into a framework built so that the step is unnecessary."}, answer:[1],
    why:"False, and it is the reverse of what the notes say. \"In probability, contradictions do not occur. All the evidence is combined to get a final probability value, so there is no need to reject evidence, although evidence can be used to reject hypotheses.\"",
    src:"Notes &sect;2.2.5 (2-8) &middot; Lecture 2C, slide 4" }
  ]
}
];
