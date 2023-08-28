// 图片加载错误 base64
export const IMAGE_ERROR = "data:image/png;base64,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"

//颜色选择器配置
export const PREDEFINE_COLORS = [
	"#ff4500",
	"#ff8c00",
	"#ffd700",
	"#90ee90",
	"#00ced1",
	"#1e90ff",
	"#c71585",
	"rgba(255, 69, 0, 0.68)",
	"rgb(255, 120, 0)",
	"hsv(51, 100, 98)",
	"hsva(120, 40, 94, 0.5)",
	"hsl(181, 100%, 37%)",
	"hsla(209, 100%, 56%, 0.73)",
	"#c7158577",
]

export const vertexShader = '\t\t\tvarying vec2 vUv;\n' +
	'\n' +
	'\t\t\tvoid main() {\n' +
	'\n' +
	'\t\t\t\tvUv = uv;\n' +
	'\n' +
	'\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n' +
	'\n' +
	'\t\t\t}'

export const fragmentShader = '\t\t\tuniform sampler2D baseTexture;\n' +
	'\t\t\tuniform sampler2D bloomTexture;\n' +
	'\n' +
	'\t\t\tvarying vec2 vUv;\n' +
	'\n' +
	'\t\t\tvoid main() {\n' +
	'\n' +
	'\t\t\t\tgl_FragColor = ( texture2D( baseTexture, vUv ) + vec4( 1.0 ) * texture2D( bloomTexture, vUv ) );\n' +
	'\n' +
	'\t\t\t}'

// 模型拆解材质的位移参数
export const MODEL_DECOMPOSE = {
	transformers_1: {
		'Mesh_0311_Tex_0310_0dds_0': { x: 0, y: 'straight', z: 0 },
		'Mesh_0314_Tex_0313_0dds_0': { x: 'straight', y: 'burden', z: 'burden' },
		'Mesh_0317_Tex_0313_0dd1_0': { x: 0, y: 0, z: 0 },
		'Mesh_0317001_Tex_0313_0dd1_0': { x: 0, y: 'burden', z: 0 },
		'Mesh_0317002_Tex_0313_0dd1_0': { x: 'straight', y: 'burden', z: 'straight' },
		'Mesh_0311001_Tex_0310_0dds_0': { x: 'straight', y: 'straight', z: 0 },
		'Mesh_0317003_Tex_0313_0dd1_0': { x: 'straight', y: 'straight', z: 'burden' },
		'Mesh_0317004_Tex_0313_0dd1_0': { x: 'straight', y: 0, z: 'burden' },
		'Mesh_0317005_Tex_0313_0dd1_0': { x: 0, y: 0, z: 0 },
		'Mesh_0317006_Tex_0313_0dd1_0': { x: 'straight', y: 'straight', z: 0 },
		'Mesh_0317007_Tex_0313_0dd1_0': { x: 'straight', y: 0, z: 'burden' },
		'Mesh_0314001_Tex_0313_0dds_0': { x: 'burden', y: 'burden', z: 'burden' },
		'Mesh_0317008_Tex_0313_0dd1_0': { x: 'burden', y: 'burden', z: 'straight' },
		'Mesh_0311002_Tex_0310_0dds_0': { x: 'burden', y: 'straight', z: 0 },
		'Mesh_0317009_Tex_0313_0dd1_0': { x: 'burden', y: 'straight', z: 'burden' },
		'Mesh_0317010_Tex_0313_0dd1_0': { x: 'burden', y: 0, z: 'burden' },
		'Mesh_0317011_Tex_0313_0dd1_0': { x: 'burden', y: 'straight', z: 0 },
		'Mesh_0317012_Tex_0313_0dd1_0': { x: 'burden', y: 0, z: 'burden' },
	},
	transformers_3: {
		'Mesh_0254_Tex_0253_0dds_0': { x: 'straight', y: 0, z: 0 },
		'Mesh_0258_Tex_0253_0dd1_0': { x: 'straight', y: 0, z: 0 },
		'Mesh_0260_Tex_0253_0dd2_0': { x: 0, y: 'straight', z: 0 },
		'Mesh_0272_Tex_0271_0dds_0': { x: 'straight', y: 0, z: 'burden' },
		'Mesh_0275_Tex_0271_0dd1_0': { x: 0, y: 0, z: 0 },
		'Mesh_0275001_Tex_0271_0dd1_0': { x: 'straight', y: 0, z: 'burden' },
		'Mesh_0275002_Tex_0271_0dd1_0': { x: 0, y: 'straight', z: 'burden' },
		'Mesh_0275003_Tex_0271_0dd1_0': { x: 0, y: 'straight', z: 'straight' },
		'Mesh_0272001_Tex_0271_0dds_0': { x: 0, y: 'burden', z: 0 },
		'Mesh_0254001_Tex_0253_0dds_0': { x: 'burden', y: 0, z: 0 },
		'Mesh_0272002_Tex_0271_0dds_0': { x: 'burden', y: 0, z: 'burden' },
		'Mesh_0275004_Tex_0271_0dd1_0': { x: 'burden', y: 0, z: 'burden' },
		'Mesh_0275005_Tex_0271_0dd1_0': { x: 0, y: 'straight', z: 'burden' },
		'Mesh_0275006_Tex_0271_0dd1_0': { x: 0, y: 'straight', z: 'straight' },
		'Mesh_0272003_Tex_0271_0dds_0': { x: 0, y: 'burden', z: 0 },
		'Mesh_0258001_Tex_0253_0dd1_0': { x: 'burden', y: 0, z: 0 },
	}
}


// 预览缓存本地key
export const MODEL_PRIVEW_CONFIG = 'MODEL_PRIVEW_CONFIG'