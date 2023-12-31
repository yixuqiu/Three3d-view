/**
	 * @describe 后期/操作模块方法
	 * @function onSetUnrealBloomPass 设置辉光效果
	 * @function setModelMeshDecompose 模型拆分
	 * @function setModelMeshDrag 模型材质可拖拽
	 * @function getMeshDragPosition 获取模型材质位拖拽置
	 * @function onSetFlowColor 修改辉光颜色
	 * @function initStageFlow 重置数据
*/

import * as THREE from 'three'
import TWEEN from "@tweenjs/tween.js";
import { DragControls } from 'three/examples/jsm/controls/DragControls';
import { TransformControls } from 'three/addons/controls/TransformControls.js';
import { MODEL_DECOMPOSE } from '@/config/constant.js'

// 设置辉光效果
function onSetUnrealBloomPass(config) {
	const { glow, threshold, strength, radius, toneMappingExposure, color } = config
	this.glowUnrealBloomPass = glow
	if (glow) {
		this.unrealBloomPass.threshold = threshold
		this.unrealBloomPass.strength = strength
		this.unrealBloomPass.radius = radius
		this.renderer.toneMappingExposure = toneMappingExposure
		this.shaderPass.material.uniforms.glowColor.value = new THREE.Color(color)

	} else {
		this.unrealBloomPass.threshold = 0
		this.unrealBloomPass.strength = 0
		this.unrealBloomPass.radius = 0
		this.renderer.toneMappingExposure = toneMappingExposure
		this.shaderPass.material.uniforms.glowColor.value = new THREE.Color()
		this.glowComposer.renderer.clear()
		this.glowComposer.renderer.dispose()
	}
}
// 模型拆分
function setModelMeshDecompose({ decompose }) {
	if (this.glowMaterialList.length <= 1) return false
	const modelDecomposeMove = (obj, position) => {
		const Tween = new TWEEN.Tween(obj.position)
		Tween.to(position, 500)
		Tween.onUpdate(function (val) {
			obj.position.set(val.x || 0, val.y || 0, val.z || 0);
		})
		Tween.start()
	}
	const length = this.glowMaterialList.length
	const angleStep = (2 * Math.PI) / length;
	this.glowMaterialList.forEach((name, i) => {
		const mesh = this.model.getObjectByName(name)
		const { decomposeName } = this.model
		if (mesh.type == 'Mesh') {
			// 如果当前模型有设置模型分解的自定义参数
			if (MODEL_DECOMPOSE[decomposeName] && MODEL_DECOMPOSE[decomposeName][name]) {
				const position = { x: 0, y: 0, z: 0 }
				const { x: modelX, y: modelY, z: modelZ } = MODEL_DECOMPOSE[decomposeName][name]
				if (modelX == 'straight') {
					position.x += decompose
				} else if (modelX == 'burden') {
					position.x -= decompose
				}
				if (modelY == 'straight') {
					position.y += decompose
				} else if (modelY == 'burden') {
					position.y -= decompose
				}
				if (modelZ == 'straight') {
					position.z += decompose
				} else if (modelZ == 'burden') {
					position.z -= decompose
				}
				modelDecomposeMove(mesh, position)
			} else {
				// 材质位置计算
				const angle = i * angleStep;
				const x = (decompose) * Math.cos(angle);
				const y = (decompose) * Math.sin(angle);
				const position = {
					x, y, z: 0
				}

				modelDecomposeMove(mesh, position)
			}
		}
	})
}
// 模型材质可拖拽
function setModelMeshDrag({ modelDrag }) {
	// 先把之前的拖拽信息给清除掉
	if (this.dragControls) this.dragControls.dispose()
	if (modelDrag) {
		this.dragControls = new TransformControls(this.camera, this.renderer.domElement);
		this.dragControls.addEventListener('dragging-changed', (event)=>{
			 console.log(event)
			this.controls.enabled = !event.value;
			// console.log(event)
		})
	   this.scene.add(this.dragControls)
		// 拖拽事件监听
		// this.dragControls.addEventListener('dragstart', () => {
		// 	// this.controls.enabled = false
		// })

		// this.dragControls.addEventListener('dragend', () => {
		// 	this.controls.enabled = true
		// })
	}
}
// 获取模型材质位拖拽置
function getMeshDragPosition() {
	const positonList = []
	this.modelMaterialList.forEach(v => {
		const mesh = this.model.getObjectByProperty('name', v.name)
		const obj = {
			name: v.name,
			...mesh.position
		}
		positonList.push(obj)
	})
	return positonList
}
// 修改辉光颜色
function onSetFlowColor(color) {
	this.shaderPass.material.uniforms.glowColor.value = new THREE.Color(color)
}

function initStageFlow() {
	this.renderer.toneMappingExposure = 2
	Object.assign(this.unrealBloomPass, {
		threshold: 0,
		strength: 0,
		radius: 0,
	})
	this.shaderPass.material.uniforms.glowColor.value = new THREE.Color()
	this.setModelMeshDrag({ modelDrag: false })
	this.setModelMeshDecompose({ decompose: 0 })
	this.glowUnrealBloomPass = false
	this.glowComposer.renderer.clear()
	this.glowComposer.renderer.dispose()
}

export default {
	onSetUnrealBloomPass,
	setModelMeshDecompose,
	setModelMeshDrag,
	getMeshDragPosition,
	onSetFlowColor,
	initStageFlow
}