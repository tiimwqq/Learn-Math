interface Itopic {
	title: string;
	slug: string;
	subtopics: Isubtopic[];
}

interface Isubtopic {
	name: string;
	slug: string;
}


export const topics: Itopic[] = [
	{
		title: "Основы арифметики и алгебры",
		slug: "arithmetic-and-algebra",
		subtopics: [
			{ name: "Числа и их свойства.", slug: "numbers-properties" },
			{ name: "Операции с числами.", slug: "number-operations" },
			{ name: "Делимость чисел.", slug: "number-divisibility" },
			{ name: "Проценты, дроби, десятичные дроби.", slug: "fractions-percentages" },
			{ name: "Линейные уравнения и неравенства.", slug: "linear-equations-inequalities" },
			{ name: "Системы линейных уравнений", slug: "linear-equations-systems" },
			{ name: "Формулы сокращенного умножения.", slug: "multiplication-formulas" },
		],
	},
	{
		title: "Основы геометрии",
		slug: "geometry-basics",
		subtopics: [
			{ name: "Простейшие геометрические фигуры.", slug: "basic-geometric-shapes" },
			{ name: "Углы и их виды, градусная мера.", slug: "angles-and-types" },
			{ name: "Треугольники.", slug: "triangles" },
			{ name: "Четырехугольники и многоугольники.", slug: "quadrilaterals-polygons" },
			{ name: "Окружность и круг.", slug: "circle-and-disk" },
			{ name: "Площади и периметры плоских фигур.", slug: "area-and-perimeter" },
		],
	},
	{
		title: "Рациональные выражения",
		slug: "rational-expressions",
		subtopics: [
			{ name: "Операции с дробями.", slug: "fraction-operations" },
			{ name: "Преобразование алгебраических выражений.", slug: "algebraic-expressions" },
			{ name: "Простейшие корни и радикалы.", slug: "roots-and-radicals" },
			{ name: "Рационализация знаменателя.", slug: "denominator-rationalization" },
		],
	},
	{
		title: "Функции и их свойства",
		slug: "functions-and-properties",
		subtopics: [
			{ name: "Понятие функции, область определения и значения.", slug: "function-definition-domain" },
			{ name: "Линейная функция: график, свойства.", slug: "linear-function" },
			{ name: "Квадратичная функция: парабола, ее свойства.", slug: "quadratic-function" },
			{ name: "Модульная функция: построение графиков.", slug: "absolute-value-function" },
			{ name: "Степенная и дробно-линейная функции.", slug: "power-and-rational-functions" },
			{ name: "Обратная пропорциональность и гипербола.", slug: "inverse-proportionality" },
		],
	},
	{
		title: "Тригонометрия",
		slug: "trigonometry",
		subtopics: [
			{ name: "Синус, косинус, тангенс, котангенс.", slug: "sine-cosine-tangent" },
			{ name: "Основные тригонометрические тождества.", slug: "trigonometric-identities" },
			{ name: "Тригонометрические уравнения.", slug: "trigonometric-equations" },
			{ name: "Графики тригонометрических функций.", slug: "trigonometric-graphs" },
		],
	},
	{
		title: "Стереометрия",
		slug: "stereometry",
		subtopics: [
			{ name: "Основные понятия: точка, прямая, плоскость.", slug: "point-line-plane" },
			{ name: "Многогранники: призма, пирамида.", slug: "polyhedra" },
			{ name: "Тела вращения: цилиндр, конус, шар.", slug: "rotational-bodies" },
			{ name: "Объемы и площади поверхностей тел.", slug: "volume-and-surface-area" },
		],
	},
	{
		title: "Уравнения и системы уравнений",
		slug: "equations-and-systems",
		subtopics: [
			{ name: "Квадратные уравнения и дискриминант.", slug: "quadratic-equations" },
			{ name: "Решение систем нелинейных уравнений.", slug: "nonlinear-systems" },
			{ name: "Уравнения с модулями.", slug: "modular-equations" },
			{ name: "Иррациональные уравнения.", slug: "irrational-equations" },
			{ name: "Показательные и логарифмические уравнения.", slug: "exponential-logarithmic-equations" },
		],
	},
	{
		title: "Логарифмы и показатели",
		slug: "logarithms-and-exponents",
		subtopics: [
			{ name: "Определение логарифма.", slug: "logarithm-definition" },
			{ name: "Свойства логарифмов.", slug: "logarithm-properties" },
			{ name: "Логарифмические выражения и уравнения.", slug: "logarithmic-equations" },
			{ name: "Показательная функция.", slug: "exponential-function" },
		],
	},
	{
		title: "Планиметрия",
		slug: "planimetry",
		subtopics: [
			{ name: "Основные теоремы: теорема Пифагора, теорема синусов, теорема косинусов.", slug: "geometry-theorems" },
			{ name: "Площадь треугольника через стороны и углы.", slug: "triangle-area" },
			{ name: "Координатная геометрия: уравнение прямой, расстояние между точками.", slug: "coordinate-geometry" },
		],
	},
	{
		title: "Комбинаторика, вероятность и статистика",
		slug: "combinatorics-probability-statistics",
		subtopics: [
			{ name: "Правило суммы и произведения.", slug: "sum-and-product-rule" },
			{ name: "Перестановки, сочетания, размещения.", slug: "permutations-combinations" },
			{ name: "Основы теории вероятностей.", slug: "probability-basics" },
			{ name: "Среднее, мода, медиана, дисперсия.", slug: "mean-median-variance" },
		],
	},
	// {
	// 	title: "Введение в математический анализ",
	// 	slug: "calculus-introduction",
	// 	subtopics: [
	// 		{ name: "Пределы последовательностей и функций.", slug: "limits" },
	// 		{ name: "Производная: понятие, вычисление, применение.", slug: "derivatives" },
	// 		{ name: "Интеграл: определение, вычисление.", slug: "integrals" },
	// 	],
	// },
];
